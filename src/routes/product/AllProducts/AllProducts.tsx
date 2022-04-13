import { useProjectContext } from '../../../contexts/Project';

const AllProducts = () => {
  const { products } = useProjectContext();
  const size = 200;
  console.log('products', products);
  return (
    // Snippet
    <>
      {products.map((i, idx) => (
        <div key={idx}>
          <img
            src={
              i.product_image_url ? i.product_image_url : `https://place-hold.it/${size}x${size}`
            }
            className="avatar image"
            style={{ height: size, width: size }}
          />
        </div>
      ))}
    </>
  );
};

export default AllProducts;
