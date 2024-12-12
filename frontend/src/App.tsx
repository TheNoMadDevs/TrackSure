import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@routes/ProtectedRoute';
import routes from '@routes/RoutesConfig';
import HomePage from '@pages/Home/HomePage';
import LoginPage from '@pages/Home/Login';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<ProtectedRoute element={route.element} roles={route.roles} />}
        />
      ))}
    </Routes>
  );
};

export default App;
