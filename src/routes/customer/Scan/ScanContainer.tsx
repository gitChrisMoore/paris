import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import QRAccountCode from '../../../components/domain/Account/QRAccountCode/QRAccountCode';
import useViewport from '../../../hooks/useViewport';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const ScanContainer = () => {
  const viewPort = useViewport();
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="flex justify-between mt-4">Account</div>
        <QRAccountCode />
        {viewPort.width <= 600 ? <BottomNavBar /> : ''}
      </MainLayout>
    </>
  );
};

export default ScanContainer;
