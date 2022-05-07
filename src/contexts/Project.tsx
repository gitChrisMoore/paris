import React, { ReactNode, useContext, useEffect, useState } from 'react';
import useAccounts from '../hooks/useAccounts';
import useBrands from '../hooks/useBrands';
import useMemberships from '../hooks/useMembership';
import useProducts from '../hooks/useProducts';
import { IAccount } from '../interfaces/IAccount';
import { IBrand } from '../interfaces/IBrand';
import { IMembership } from '../interfaces/IMembership';
import { IProduct } from '../interfaces/IProduct';

export type ProjectContextType = {
  products: IProduct[];
  brands: IBrand[];
  memberships: IMembership[];
  accounts: IAccount[];
  fetchProducts: () => void;
  fetchBrands: () => void;
  fetchMemberships: () => void;
  fetchAccounts: () => void;
};

const ProjectContext = React.createContext<ProjectContextType>({
  products: [],
  brands: [],
  memberships: [],
  accounts: [],
  fetchProducts: () => null,
  fetchBrands: () => null,
  fetchMemberships: () => null,
  fetchAccounts: () => null
});

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { getProducts } = useProducts();
  const [brands, setBrands] = useState<IBrand[]>([]);
  const { getBrands } = useBrands();
  const [memberships, setMemberships] = useState<IMembership[]>([]);
  const { getMemberships } = useMemberships();
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const { getAccounts } = useAccounts();

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  const fetchBrands = async () => {
    const res = await getBrands();
    setBrands(res);
  };

  const fetchMemberships = async () => {
    const res = await getMemberships();
    setMemberships(res);
  };

  const fetchAccounts = async () => {
    const res = await getAccounts();
    setAccounts(res);
  };

  useEffect(() => {
    fetchProducts();
    fetchBrands();
    fetchMemberships();
    fetchAccounts();
  }, []);

  const value = {
    products,
    fetchProducts,
    brands,
    fetchBrands,
    memberships,
    fetchMemberships,
    accounts,
    fetchAccounts
  };

  return (
    <ProjectContext.Provider value={value as ProjectContextType}>
      {children}
    </ProjectContext.Provider>
  );
};

export function useProjectContext() {
  return useContext(ProjectContext);
}
