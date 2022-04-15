import { useEffect, useState } from 'react';
import { useProjectContext } from '../../../../contexts/Project';
import { IBrand } from '../../../../interfaces/IBrand';
import { IBrandFormEdit } from '../../../../interfaces/IBrandFormEdit';
import SmallCard from '../../../ui/SmallCard/SmallCard';
import BrandEdit from '../BrandEdit/BrandEdit';

const BrandsSmallCards = () => {
  const { brands, fetchBrands } = useProjectContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activeID, setActiveID] = useState('');

  const handleActionClick = (i: IBrandFormEdit) => {
    console.log('handleActionClick', i);
    setActiveID(i.id);
    setIsOpen(!isOpen);
  };

  const toUI = (data: IBrand[]) => {
    const items = data.map((i) => {
      return {
        id: i.id,
        headline: i.name,
        subhead: i.description,
        actionBtnText: 'view'
      };
    });
    return items;
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    // Snippet
    <>
      <div className="flex flex-wrap gap-2 ">
        {toUI(brands).map((i) => (
          <SmallCard key={i.id} item={i} onActionClick={handleActionClick} />
        ))}
      </div>

      <BrandEdit id={activeID} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default BrandsSmallCards;
