import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Admin/Dashboard';
import Users from '@pages/Admin/Users';
import Reports from '@pages/Admin/Inventory';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="inventory" element={<Reports />} />
    </Routes>
  );
};

export default AdminRoutes;
