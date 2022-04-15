import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { IBrandFormEdit } from '../interfaces/IBrandFormEdit';
import { ICreateBrandForm } from '../interfaces/ICreateBrandForm';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_BRANDS_TBL;

const useBrands = () => {
  const [status, setStatus] = useState('idle');
  const { user } = useAuthContext();

  const getBrands = async () => {
    const { data } = await supabase.from(tableName).select('*');
    if (data) {
      console.log('getBrands data', data);
      return data;
    } else {
      return [];
    }
  };

  const getBrandByID = async (id: string) => {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (data) {
      console.log('getProducts data', data);
      setStatus('resolved');
      return data;
    } else {
      return [];
    }
  };

  const createBrand = async (i: ICreateBrandForm) => {
    console.log(i);

    const { data, error } = await supabase
      .from(tableName)
      .insert({
        user_id: user.id,
        name: i.name,
        description: i?.description
      })
      .single();

    console.log('data', data);
    console.log('error', error);
    return data;
  };

  const updateBrand = async (i: IBrandFormEdit) => {
    const { data, error } = await supabase
      .from(tableName)
      .update(i)
      .match({ id: i.id });

    if (error) {
      throw error;
    } else {
      return data;
    }
  };

  return { status, getBrands, getBrandByID, createBrand, updateBrand };
};

export default useBrands;
