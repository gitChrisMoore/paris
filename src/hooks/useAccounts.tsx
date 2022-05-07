import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { IBrandFormEdit } from '../interfaces/IBrandFormEdit';
import { ICreateAccountForm } from '../interfaces/ICreateAccountForm';
import { ICreateBrandForm } from '../interfaces/ICreateBrandForm';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_ACCOUNTS_TBL;

const useAccounts = () => {
  const [status, setStatus] = useState('idle');
  const { user } = useAuthContext();

  const getAccounts = async () => {
    const { data } = await supabase.from(tableName).select('*');
    if (data) {
      console.log('getBrands data', data);
      return data;
    } else {
      return [];
    }
  };

  const createAccount = async (i: ICreateAccountForm) => {
    console.log(i);

    const { data, error } = await supabase
      .from(tableName)
      .insert({
        user_id: user.id
      })
      .single();

    console.log('data', data);
    console.log('error', error);
    return data;
  };

  return { status, getAccounts, createAccount };
};

export default useAccounts;
