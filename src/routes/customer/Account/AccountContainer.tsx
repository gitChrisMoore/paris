import VirtualAccountCard from '../../../components/domain/Account/VirtualAccountCard/VirtualAccountCard';
import TransactionList from '../../../components/domain/Transaction/TransactionList/TransactionList';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const AccountContainer = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-bold my-4">Account</div>
        <VirtualAccountCard />
        <br />
        <br />
        <TransactionList />
      </MainLayout>
    </>
  );
};

export default AccountContainer;
