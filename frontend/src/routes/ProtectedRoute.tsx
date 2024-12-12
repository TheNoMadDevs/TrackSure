import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthUser } from '@hooks/useAuthUser';

interface ProtectedRouteProps {
    element: React.ReactNode;
    roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, roles }) => {
    const { user, role } = useAuthUser();

    if (!user) {
        return <Navigate to='/signin' />;
    }
    if (!role) {
        return <Navigate to='/signin' />;
    }
    if (!roles.includes(role)) {
        return <Navigate to='/' replace />;
    }
    return <>{element}</>;
};

export default ProtectedRoute;
