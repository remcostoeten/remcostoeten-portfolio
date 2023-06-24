import React from 'react';
import Navigation from '@/components/Navigation';
import { Poppins } from 'next/font/google';
import { AuthContext } from '../../lib/authContext';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
});

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <body className="poppins bg-offblack">
                <Navigation />
                {children}
            </body>
        </AuthProvider>
    );
}