import VirtualAccountCard from '../../../components/domain/Account/VirtualAccountCard/VirtualAccountCard';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AccountContainer = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-bold my-4">Account</div>
        <VirtualAccountCard />
      </MainLayout>
    </>
  );
};

export default AccountContainer;
