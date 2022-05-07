import QRAccountCode from '../../../components/domain/Account/QRAccountCode/QRAccountCode';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const ScanContainer = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-bold my-4">Scan & pay</div>
        <QRAccountCode />
      </MainLayout>
    </>
  );
};

export default ScanContainer;
