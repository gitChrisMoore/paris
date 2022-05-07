import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import useViewport from '../../../hooks/useViewport';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const ProfileContainer = () => {
  const viewPort = useViewport();
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="flex justify-between mt-4">ProfileContainer</div>
        {viewPort.width <= 600 ? <BottomNavBar /> : ''}
      </MainLayout>
    </>
  );
};

export default ProfileContainer;
