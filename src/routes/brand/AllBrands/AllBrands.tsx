import { useEffect } from 'react';
import { useProjectContext } from '../../../contexts/Project';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AllBrands = () => {
  const { brands, fetchBrands } = useProjectContext();

  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-medium mb-2">All Brands</div>
        {brands.map((i, idx) => (
          <div key={idx}>{i.name}</div>
        ))}
      </MainLayout>
    </>
  );
};

export default AllBrands;
