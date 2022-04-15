import BrandsSmallCards from '../../../../components/domain/Brand/BrandsSmallCards/BrandsSmallCards';
import MainLayout from '../../../../layouts/MainLayout/MainLayout';

const BrandDashboard = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-medium mb-2">Brand Dashboard</div>
        <BrandsSmallCards />
      </MainLayout>
    </>
  );
};

export default BrandDashboard;
