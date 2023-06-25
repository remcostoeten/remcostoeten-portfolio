'use client';
import { AuthContext } from '@/lib/authContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const Dashboard = () => {
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
