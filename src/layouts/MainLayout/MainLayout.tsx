import { FC, ReactNode, useState } from 'react';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import LeftNavDrawer from '../../components/LeftNavDrawer/LeftNavDrawer';
import LeftNavDrawerItem from '../../components/LeftNavDrawerItem/LeftNavDrawerItem';
import TopAppBar from '../../components/TopAppBar/TopAppBar';
import TopAppBarBrand from '../../components/TopAppBarBrand/TopAppBarBrand';
import useViewport from '../../hooks/useViewport';

interface Props {
  type?: string;
  children?: ReactNode;
}

const MainLayout: FC<Props> = (props) => {
  const { type, children } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const viewPort = useViewport();

  const externalNavs = [
    { path: '/asdasd', name: 'Brand Home' },
    { path: '/visitor/signup', name: 'Register' },
    { path: '/visitor/login', name: 'Login' }
  ];

  const appNavs = [
    { path: '/asdasd', name: 'Dashboard' },
    { path: '/visitor/signup', name: 'Scan' },
    { path: '/visitor/login', name: 'Account' },
    { path: '/visitor/login', name: 'Profile' }
  ];

  return (
    // Snippet
    <>
      {type === 'brand' ? (
        <TopAppBarBrand isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      ) : (
        <TopAppBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
      <LeftNavDrawer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
        {/* External */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'External'}
        </h2>
        {externalNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}
        {/*  */}

        {/* App Navs */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'In-App Pages'}
        </h2>
        {appNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}
      </LeftNavDrawer>
      <div className="max-w-lg m-auto px-2">{children}</div>
      {type === 'brand' ? (
        ''
      ) : (
        <>{viewPort.width <= 600 ? <BottomNavBar /> : ''}</>
      )}
    </>
  );
};

export default MainLayout;
