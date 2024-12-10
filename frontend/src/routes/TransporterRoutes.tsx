import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Transporter/Dashboard';
import Products from '@pages/Transporter/Shipments';
import Notes from '@pages/Transporter/Notes';

const TransporterRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="notes" element={<Notes />} />
    </Routes>
  );
};

export default TransporterRoutes;
