import { useAuthContext } from '../contexts/Auth';
import { ICreateBrandForm } from '../interfaces/ICreateBrandForm';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_BRANDS_TBL;

const useBrands = () => {
  const { user } = useAuthContext();

  const getBrands = async () => {
    // console.log('starting query');

    const { data, error, status } = await supabase.from(tableName).select('*');
    // console.log('getBrands error', error);
    // console.log('getBrands status', status);
    if (data) {
      console.log('getBrands data', data);
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

  return { getBrands, createBrand };
};

export default useBrands;
