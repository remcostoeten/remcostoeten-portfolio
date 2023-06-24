'use client';
import React, { createContext, useState, useEffect } from 'react';
import { auth, googleAuthProvider } from './firebase';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            console.error('Error signing in with Google: ', error);
        }
    };

    return <AuthContext.Provider value={{ user, signInWithGoogle }}>{children}</AuthContext.Provider>;
};
