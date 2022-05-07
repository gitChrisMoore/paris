import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import OpenAccountCard from '../../../components/domain/Account/OpenAccountCard/OpenAccountCard';
import useViewport from '../../../hooks/useViewport';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const CustomerDashboard = () => {
  const viewPort = useViewport();
  return (
    // Snippet
    <>
      <MainLayout>
        <OpenAccountCard />
        {viewPort.width <= 600 ? <BottomNavBar /> : ''}
      </MainLayout>
    </>
  );
};

export default CustomerDashboard;
