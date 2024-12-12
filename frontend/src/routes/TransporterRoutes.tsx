import { Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Transporter/Dashboard';
import CurrentShipment from '@pages/Transporter/CurrentShipment';
import ShipmentHistory from '@pages/Transporter/ShipmentHistory';

const TransporterRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="currentshipment" element={<CurrentShipment />} />
      <Route path="shipmenthistory" element={<ShipmentHistory/>} />
    </Routes>
  );
};

export default TransporterRoutes;
