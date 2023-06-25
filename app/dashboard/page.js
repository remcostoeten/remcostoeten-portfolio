'use client';
import { useContext } from 'react';
import { AuthContext } from '@/lib/authContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const Dashboard = () => {
    const { user, signOut } = useContext(AuthContext);

    return (
        <ProtectedRoute>
            <div className="bg-offwhite text-offblack">
                <h2>Dashboard</h2>
                <p>Welcome, {user?.displayName}!</p>
                <button onClick={signOut}>Sign Out</button>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
