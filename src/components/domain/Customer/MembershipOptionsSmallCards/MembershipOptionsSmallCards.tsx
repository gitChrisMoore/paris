import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectContext } from '../../../../contexts/Project';
import useMemberships from '../../../../hooks/useMembership';
import { IBrand } from '../../../../interfaces/IBrand';
import SmallCard from '../../../ui/SmallCard/SmallCard';

const MembershipOptionsSmallCards = () => {
  const { brands, fetchBrands } = useProjectContext();
  const { createMembership } = useMemberships();
  const navigate = useNavigate();

  const handleActionClick = (i: IBrand) => {
    // add delete membership
    console.log('handleActionClick update:', i);
    createMembership(i.id).then(
      (res) => {
        console.log('product update:', res);
        navigate('/customer/customer-dashboard');
      },
      (error) => {
        alert(error);
      }
    );
  };

  const toUI = (data: IBrand[]) => {
    const items = data.map((i) => {
      return {
        id: i.id,
        headline: i.name,
        actionBtnText: 'join'
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
    </>
  );
};

export default MembershipOptionsSmallCards;
