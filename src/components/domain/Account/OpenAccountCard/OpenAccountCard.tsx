import { useNavigate } from 'react-router-dom';
import SmallCard from '../../../ui/SmallCard/SmallCard';

const OpenAccountCard = () => {
  const navigate = useNavigate();
  const accountCard = {
    id: '0123123',
    headline: 'Open Account',
    subhead:
      'Finish setting up your account. It literally takes less than 1 minute!',
    actionBtnText: 'setup'
  };

  return (
    // Snippet
    <>
      <SmallCard
        item={accountCard}
        onActionClick={() => navigate('/account/create')}
      />
    </>
  );
};

export default OpenAccountCard;
