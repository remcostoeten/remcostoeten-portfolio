import { useContext, useEffect } from 'react';
import { AuthContext } from '@/lib/authContext';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login');
        }
    }, [user, loading, router]);

    return <>{children}</>;
};

export default ProtectedRoute;
