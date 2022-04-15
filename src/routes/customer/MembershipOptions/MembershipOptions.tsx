import MembershipOptionsSmallCards from '../../../components/domain/Customer/MembershipOptionsSmallCards/MembershipOptionsSmallCards';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const MembershipOptions = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-medium mb-2">Membership Options</div>
        <MembershipOptionsSmallCards />
      </MainLayout>
    </>
  );
};

export default MembershipOptions;
