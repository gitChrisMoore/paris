import React, { ReactNode, useContext, useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { IProduct } from '../interfaces/IProduct';

export type ProjectContextType = {
  products: IProduct[];
};

const ProjectContext = React.createContext<ProjectContextType>({
  products: []
});

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [products, setproducts] = useState<IProduct[]>([]);
  const { getProducts } = useProducts();

  const fetchproducts = async () => {
    const res = await getProducts();
    setproducts(res);
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const value = {
    products
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
