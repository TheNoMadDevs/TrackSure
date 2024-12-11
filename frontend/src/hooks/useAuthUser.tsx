import { useContext } from 'react';

import { AuthContext } from '@context/AuthContext';

export const useAuthUser = () => {
    const { user, role } = useContext(AuthContext);
    return { user, role };
}
