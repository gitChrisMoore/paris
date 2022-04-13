import { useEffect } from 'react';
import { useProjectContext } from '../../../contexts/Project';
import ProductItem from './ProductItem';

const AllProducts = () => {
  const { products, fetchProducts } = useProjectContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    // Snippet
    <>
      <div className="mx-2">
        <div className="text-lg font-medium my-2">All Products</div>
        {products.map((i, idx) => (
          <div key={idx}>
            <ProductItem product={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
