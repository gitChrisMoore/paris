import { useEffect } from 'react';
import ProductPictureCards from '../../../components/domain/Product/ProductPictureCards/ProductPictureCards';
import { useProjectContext } from '../../../contexts/Project';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AllProducts = () => {
  const { fetchProducts } = useProjectContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-medium mb-2">All Brands</div>

        <ProductPictureCards />
      </MainLayout>
    </>
  );
};

export default AllProducts;
