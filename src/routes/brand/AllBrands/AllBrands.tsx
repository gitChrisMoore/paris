import { useEffect } from 'react';
import BrandsSmallCards from '../../../components/domain/Brand/BrandsSmallCards/BrandsSmallCards';
import { useProjectContext } from '../../../contexts/Project';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AllBrands = () => {
  const { fetchBrands } = useProjectContext();

  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-medium mb-2">All Brands</div>

        <BrandsSmallCards />
      </MainLayout>
    </>
  );
};

export default AllBrands;
