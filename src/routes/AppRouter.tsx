import { Route, Routes } from 'react-router-dom';
import Login from './account/Login/Login';
import Register from './account/Register/Register';
import AllBrands from './brand/AllBrands/AllBrands';
import CreateBrand from './brand/CreateBrand/CreateBrand';
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

        {/* Catch All */}
        <Route path="*" element={<Visitor />} />
      </Routes>
    </>
  );
};

export default AppRouter;
