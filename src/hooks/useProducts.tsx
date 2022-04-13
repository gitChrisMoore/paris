import { useAuthContext } from '../contexts/Auth';
import { ICreateProductForm } from '../interfaces/ICreateProductForm';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_PRODUCTS_TBL;

const useProducts = () => {
  const { user } = useAuthContext();

  const getProducts = async () => {
    // console.log('starting query');

    const { data, error, status } = await supabase
      .from(tableName)
      .select('*, devbrands:dev-brands ( name )');
    // console.log('getProducts error', error);
    // console.log('getProducts status', status);
    if (data) {
      console.log('getProducts data', data);
      return data;
    } else {
      return [];
    }
  };

  const uploadProductImage = async (filePath: string, file: File) => {
    const { data, error: uploadError } = await supabase.storage
      .from('product_images')
      .upload(filePath, file);

    console.log('uploadProductImage data:', data);
    if (uploadError) {
      throw uploadError;
    } else {
      return data;
    }
  };

  const createProduct = async (i: ICreateProductForm) => {
    console.log('new product: ', i);

    const fileExt = i.file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const res = await uploadProductImage(filePath, i.file);
    console.log('res', res);

    const { data, error } = await supabase
      .from(tableName)
      .insert({
        user_id: user.id,
        brand_id: i.brand_id,
        title: i.title,
        product_image_url:
          'https://ayqwspxjamntpzpoaoyd.supabase.co/storage/v1/object/public/product_images/' +
          filePath,
        description: i?.description
      })
      .single();

    console.log('data', data);
    console.log('error', error);
    return data;
  };

  return { getProducts, createProduct };
};

export default useProducts;
