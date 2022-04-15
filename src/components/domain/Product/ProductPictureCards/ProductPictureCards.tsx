import { useEffect, useState } from 'react';
import { useProjectContext } from '../../../../contexts/Project';
import { IBrandFormEdit } from '../../../../interfaces/IBrandFormEdit';
import { IProduct } from '../../../../interfaces/IProduct';
import PictureCard from '../../../ui/PictureCard/PictureCard';
import ProductEdit from '../ProductEdit/ProductEdit';

const ProductPictureCards = () => {
  const { products, fetchProducts } = useProjectContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activeID, setActiveID] = useState('');

  const handleActionClick = (i: IBrandFormEdit) => {
    console.log('handleActionClick', i);
    setActiveID(i.id);
    setIsOpen(!isOpen);
  };

  const toUI = (data: IProduct[]) => {
    const items = data.map((i) => {
      return {
        id: i.id,
        img_url: i.product_image_url,
        headline: i.title,
        subhead: i.description,
        actionBtnText: 'view'
      };
    });
    return items;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    // Snippet
    <>
      <div className="flex flex-wrap gap-2 ">
        {toUI(products).map((i) => (
          <PictureCard key={i.id} item={i} onActionClick={handleActionClick} />
        ))}
      </div>

      <ProductEdit id={activeID} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProductPictureCards;
