import { Route, Routes } from 'react-router-dom';
import CreateAccount from './account/CreateAccount/CreateAccount';
import Login from './account/Login/Login';
import Register from './account/Register/Register';
import AllBrands from './brand/AllBrands/AllBrands';
import CreateBrand from './brand/CreateBrand/CreateBrand';
import AccountContainer from './customer/Account/AccountContainer';
import CustomerDashboard from './customer/CustomerDashboard/CustomerDashboard';
import MembershipOptions from './customer/MembershipOptions/MembershipOptions';
import ProfileContainer from './customer/Profile/ProfileContainer';
import ScanContainer from './customer/Scan/ScanContainer';
import CreateProduct from './product/CreateProduct/CreateProduct';
import BrandDashboard from './retailer/Brands/BrandDashboard/BrandDashboard';
import RetailerDashboard from './retailer/RetailerDashboard/RetailerDashboard';
import LoginVisitor from './visitor/LoginVisitor';
import SignupVisitor from './visitor/SignupVisitor';
import Visitor from './visitor/Visitor';

const AppRouter = () => {
  return (
    // Snippet
    <>
      <Routes>
        {/* Account */}
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/create" element={<CreateAccount />} />

        {/* Retailer */}
        <Route
          path="/retailer/retailer-dashboard"
          element={<RetailerDashboard />}
        />
        <Route path="/retailer/brands" element={<BrandDashboard />} />

        {/* Brand */}
        <Route path="/brand/" element={<AllBrands />} />
        <Route path="/brand/create" element={<CreateBrand />} />

        {/* Retailer */}
        <Route path="/product/create" element={<CreateProduct />} />

        {/* Vistor */}
        <Route path="/visitor/signup" element={<SignupVisitor />} />
        <Route path="/visitor/login" element={<LoginVisitor />} />

        {/* Customer */}
        <Route
          path="/customer/customer-dashboard"
          element={<CustomerDashboard />}
        />
        <Route
          path="/customer/membership-options"
          element={<MembershipOptions />}
        />
        <Route path="/customer/account" element={<AccountContainer />} />
        <Route path="/customer/scan" element={<ScanContainer />} />
        <Route path="/customer/profile" element={<ProfileContainer />} />

        {/* Catch All */}
        <Route path="*" element={<Visitor />} />
      </Routes>
    </>
  );
};

export default AppRouter;
