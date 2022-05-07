import MainLayout from '../../../layouts/MainLayout/MainLayout';
import ProfileContainerItem from './ProfileContainerItem';

const ProfileContainer = () => {
  return (
    // Snippet
    <>
      <MainLayout>
        <div className="text-lg font-bold my-4">Profile</div>

        <div className="font-bold mt-12">Personal info</div>

        <ProfileContainerItem
          headline="Contact info"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="Account ID"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="Linked accounts"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="App icon"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <div className="font-bold mt-12">Help & policies</div>

        <ProfileContainerItem
          headline="Help"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="App terms"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="Privacy statement"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="Analytics"
          onActionClick={() => {
            console.log('Click');
          }}
        />

        <ProfileContainerItem
          headline="Delete accounts"
          onActionClick={() => {
            console.log('Click');
          }}
        />
      </MainLayout>
    </>
  );
};

export default ProfileContainer;
