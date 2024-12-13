import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Admin/Dashboard';
import Users from '@pages/Admin/Users';
import Inventory from '@pages/Admin/Inventory';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="inventory" element={<Inventory/>} />
    </Routes>
  );
};

export default AdminRoutes;
