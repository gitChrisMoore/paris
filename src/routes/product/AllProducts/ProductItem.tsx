//asdasd

import { FC } from 'react';
import { IProduct } from '../../../interfaces/IProduct';

interface Props {
  product: IProduct;
}

const ProductItem: FC<Props> = (props) => {
  const { product } = props;
  const size = 500;

  return (
    <>
      <img
        src={
          product.product_image_url
            ? product.product_image_url
            : `https://place-hold.it/${size}x${size}`
        }
        className="avatar image"
      />
      <div>{product.title}</div>
      <div>{product.devbrands.name}</div>
    </>
  );
};

export default ProductItem;
