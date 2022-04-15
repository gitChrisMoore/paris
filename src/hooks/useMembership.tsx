import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { supabase } from '../utils/storage/supabase';

const tableName = process.env.REACT_APP_SUPABASE_MEMBERSHIPS_TBL;

const useMemberships = () => {
  const [status, setStatus] = useState('idle');
  const { user } = useAuthContext();

  const getMemberships = async () => {
    const { data } = await supabase.from(tableName).select('*');
    if (data) {
      console.log('getMemberships data', data);
      return data;
    } else {
      return [];
    }
  };

  const getMembershipByID = async (id: string) => {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (data) {
      console.log('getMemberships data', data);
      setStatus('resolved');
      return data;
    } else {
      return [];
    }
  };

  const deleteMembership = async (id: string) => {
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .match({ id: id })
      .single();

    if (error) throw error;
    if (data) {
      console.log('getMemberships data', data);
      setStatus('resolved');
      return data;
    } else {
      return [];
    }
  };

  const createMembership = async (brand_id: string) => {
    const { data, error } = await supabase
      .from(tableName)
      .insert({
        user_id: user.id,
        brand_id: brand_id
      })
      .single();

    console.log('data', data);
    console.log('error', error);
    return data;
  };

  return {
    status,
    getMemberships,
    getMembershipByID,
    createMembership,
    deleteMembership
  };
};

export default useMemberships;
