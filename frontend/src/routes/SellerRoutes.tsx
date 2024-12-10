import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Seller/Dashboard';
import Products from '@pages/Seller/Products';
import Shipments from '@pages/Seller/Shipments';
import Alerts from '@pages/Seller/Alerts';
import History from '@pages/Seller/History';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="shipments" element={<Shipments />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="history" element={<History />} />
    </Routes>
  );
};

export default SellerRoutes;
