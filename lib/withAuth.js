'use client';
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from './authContext';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const { user } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.push('/404');
            }
        }, [user, router]);

        if (user) {
            return <Component {...props} />;
        } else {
            return null; // Or return a loading spinner
        }
    };

    return AuthenticatedComponent;
};

export default withAuth;
