import { useEffect } from 'react';
import { useProjectContext } from '../../../../contexts/Project';
import useMemberships from '../../../../hooks/useMembership';
import { IMembership } from '../../../../interfaces/IMembership';
import SmallCard from '../../../ui/SmallCard/SmallCard';

const MembershipsSmallCards = () => {
  const { memberships, fetchMemberships } = useProjectContext();
  const { deleteMembership } = useMemberships();

  const handleActionClick = async (i: IMembership) => {
    // add delete membership
    console.log('MembershipOptionsSmallCards handleActionClick', i);
    await deleteMembership(i.id);
    fetchMemberships();
  };

  const toUI = (data: IMembership[]) => {
    const items = data.map((i) => {
      return {
        id: i.id,
        headline: i.brand_id,
        actionBtnText: 'leave'
      };
    });
    return items;
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  return (
    // Snippeta
    <>
      <div className="flex flex-wrap gap-2 ">
        {toUI(memberships).map((i) => (
          <SmallCard key={i.id} item={i} onActionClick={handleActionClick} />
        ))}
      </div>
    </>
  );
};

export default MembershipsSmallCards;
