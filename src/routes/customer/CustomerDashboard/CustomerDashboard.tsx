import OpenAccountCard from '../../../components/domain/Account/OpenAccountCard/OpenAccountCard';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const CustomerDashboard = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-bold my-4">Dashboard</div>
        <OpenAccountCard />
      </MainLayout>
    </>
  );
};

export default CustomerDashboard;
