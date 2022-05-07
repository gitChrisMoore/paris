import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import VirtualAccountCard from '../../../components/domain/Account/VirtualAccountCard/VirtualAccountCard';
import useViewport from '../../../hooks/useViewport';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AccountContainer = () => {
  const viewPort = useViewport();
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="flex justify-between mt-4">Account</div>
        <VirtualAccountCard />
        {viewPort.width <= 600 ? <BottomNavBar /> : ''}
      </MainLayout>
    </>
  );
};

export default AccountContainer;
