import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Consumer/Dashboard';
import Products from '@pages/Consumer/Products';
import History from '@pages/Consumer/History';

const ConsumerRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="history" element={<History />} />
    </Routes>
  );
};

export default ConsumerRoutes;
