import { FC, ReactNode, useState } from 'react';
import LeftNavDrawer from '../../components/LeftNavDrawer/LeftNavDrawer';
import LeftNavDrawerItem from '../../components/LeftNavDrawerItem/LeftNavDrawerItem';
import TopAppBar from '../../components/TopAppBar/TopAppBar';
import TopAppBarBrand from '../../components/TopAppBarBrand/TopAppBarBrand';

interface Props {
  type?: string;
  children?: ReactNode;
}

const MainLayout: FC<Props> = (props) => {
  const { type, children } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const retailerNavs = [
    { path: '/retailer/retailer-dashboard', name: 'Dashboard' },
    { path: '/account/register', name: 'Register' },
    { path: '/account/login', name: 'Login' }
  ];

  const customerNavs = [
    { path: '/visitor/signup', name: 'Register' },
    { path: '/visitor/login', name: 'Login' }
  ];

  const brandNavs = [
    { path: '/brand/', name: 'All Brands' },
    { path: '/brand/create', name: 'Create' }
  ];
  const productNavs = [{ path: '/product/create', name: 'Create' }];

  return (
    // Snippet
    <>
      {type === 'brand' ? (
        <TopAppBarBrand isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      ) : (
        <TopAppBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
      <LeftNavDrawer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
        {/* Brand */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'Brands'}
        </h2>
        {brandNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}
        {/* Products */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'Products'}
        </h2>
        {productNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}
        {/* Retailer */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'Retailer'}
        </h2>
        {retailerNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}
        {/* Customer */}
        <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">
          {'Customer'}
        </h2>
        {customerNavs.map((t) => {
          return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
        })}{' '}
      </LeftNavDrawer>
      <div className="mx-2 ">{children}</div>
    </>
  );
};

export default MainLayout;
