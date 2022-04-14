import { useEffect } from 'react';
import { useProjectContext } from '../../../contexts/Project';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import BrandSmallCard from './BrandSmallCard';

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
        <div className="flex flex-wrap gap-2 ">
          {brands.map((i, idx) => (
            <BrandSmallCard key={idx} brand={i} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default AllBrands;
