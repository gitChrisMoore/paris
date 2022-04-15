import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { ICreateProductForm } from '../interfaces/ICreateProductForm';
import { IProductFormEdit } from '../interfaces/IProductFormEdit';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_PRODUCTS_TBL;
const BASE_IMG_URL =
  'https://ayqwspxjamntpzpoaoyd.supabase.co/storage/v1/object/public/product_images/';

const useProducts = () => {
  const [status, setStatus] = useState('idle');
  const { user } = useAuthContext();

  const getProducts = async () => {
    const { data, error } = await supabase
      .from(tableName)
      .select('*, devbrands:dev-brands ( name )');

    if (error) throw error;
    if (data) {
      console.log('getProducts data', data);
      return data;
    } else {
      return [];
    }
  };

  const getProductByID = async (id: string) => {
    const { data, error } = await supabase
      .from(tableName)
      .select('*, devbrands:dev-brands ( name )')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (data) {
      setStatus('resolved');
      return data;
    } else {
      return [];
    }
  };

  const uploadProductImage = async (filePath: string, file: File) => {
    const { data, error } = await supabase.storage
      .from('product_images')
      .upload(filePath, file);

    if (error) throw error;
    if (data) {
      console.log('uploadProductImage upload pic', data);
      return data;
    } else {
      return [];
    }
  };

  const createProduct = async (i: ICreateProductForm) => {
    const fileExt = i.file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    uploadProductImage(filePath, i.file)
      .then(() => {
        return supabase
          .from(tableName)
          .insert({
            user_id: user.id,
            brand_id: i.brand_id,
            title: i.title,
            product_image_url: BASE_IMG_URL + filePath,
            description: i?.description
          })
          .single();
      })
      .then(
        (res) => {
          return res;
        },
        (error) => {
          throw error;
        }
      );
  };

  const updateProduct = async (i: IProductFormEdit) => {
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

  return { status, getProducts, getProductByID, createProduct, updateProduct };
};

export default useProducts;
