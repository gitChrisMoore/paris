import { Route, Routes } from 'react-router-dom';
import Login from './account/Login/Login';
import Register from './account/Register/Register';
import AllProducts from './product/AllProducts/AllProducts';
import CreateProduct from './product/CreateProduct/CreateProduct';
import RetailerDashboard from './retailer/RetailerDashboard/RetailerDashboard';

const AppRouter = () => {
  return (
    // Snippet
    <>
      <Routes>
        {/* Account */}
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />

        {/* Retailer */}
        <Route path="/retailer/retailer-dashboard" element={<RetailerDashboard />} />

        {/* Retailer */}
        <Route path="/product/create-product" element={<CreateProduct />} />
        <Route path="/product/all-products" element={<AllProducts />} />

        {/* Enroll */}
      </Routes>
    </>
  );
};

export default AppRouter;
