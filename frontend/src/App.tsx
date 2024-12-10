import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminRoutes from '@routes/AdminRoutes';
import ConsumerRoutes from '@routes/ConsumerRoutes';
import SellerRoutes from '@routes/SellerRoutes';
import TransporterRoutes from '@routes/TransporterRoutes';
import HomePage from '@pages/Home/HomePage';
import LoginPage from '@pages/Home/Login';

const App = () => {
  const [role, ] = useState<string | null>("admin");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {role === 'admin' && <Route path="/admin/*" element={<AdminRoutes />} />}
      {role === 'consumer' && <Route path="/consumer/*" element={<ConsumerRoutes />} />}
      {role === 'seller' && <Route path="/seller/*" element={<SellerRoutes />} />}
      {role === 'transporter' && <Route path="/transporter/*" element={<TransporterRoutes />} />}
    </Routes>
  );
};

export default App;
