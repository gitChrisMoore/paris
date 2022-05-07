import { useNavigate } from 'react-router-dom';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import OpenAccountCard from '../../../components/domain/Account/OpenAccountCard/OpenAccountCard';
import MembershipsSmallCards from '../../../components/domain/Customer/MembershipsSmallCards/MembershipsSmallCards';
import useViewport from '../../../hooks/useViewport';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const viewPort = useViewport();
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="flex justify-between mt-4">
          <BasicButton
            onClick={() => navigate('/customer/membership-options')}
            variant="primary">
            find more memberships
          </BasicButton>
        </div>
        <MembershipsSmallCards />
        <OpenAccountCard />
        {viewPort.width}
        {viewPort.width <= 600 ? <BottomNavBar /> : ''}
      </MainLayout>
    </>
  );
};

export default CustomerDashboard;
