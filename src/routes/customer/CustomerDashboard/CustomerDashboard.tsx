import { useNavigate } from 'react-router-dom';
import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import MembershipsSmallCards from '../../../components/domain/Customer/MembershipsSmallCards/MembershipsSmallCards';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const CustomerDashboard = () => {
  const navigate = useNavigate();
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
      </MainLayout>
    </>
  );
};

export default CustomerDashboard;
