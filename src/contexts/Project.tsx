import React, { ReactNode, useContext, useEffect, useState } from 'react';
import useBrands from '../hooks/useBrands';
import useProducts from '../hooks/useProducts';
import { IBrand } from '../interfaces/IBrand';
import { IProduct } from '../interfaces/IProduct';

export type ProjectContextType = {
  products: IProduct[];
  brands: IBrand[];
  fetchProducts: () => void;
  fetchBrands: () => void;
};

const ProjectContext = React.createContext<ProjectContextType>({
  products: [],
  brands: [],
  fetchProducts: () => null,
  fetchBrands: () => null
});

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const { getProducts } = useProducts();
  const { getBrands } = useBrands();

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  const fetchBrands = async () => {
    const res = await getBrands();
    setBrands(res);
  };

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, []);

  const value = {
    products,
    brands,
    fetchProducts,
    fetchBrands
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
