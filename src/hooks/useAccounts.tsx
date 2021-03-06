import { useAuthContext } from '../contexts/Auth';
import { ICreateAccountForm } from '../interfaces/ICreateAccountForm';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_ACCOUNTS_TBL;

const useAccounts = () => {
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

  return { getAccounts, createAccount };
};

export default useAccounts;
