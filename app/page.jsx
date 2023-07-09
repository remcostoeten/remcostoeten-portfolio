'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Intro from '@/components/hero/Intro';
import HeroContent from '@/components/hero/HeroContent';
import LoginForm from '@/components/LoginForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, googleAuthProvider } from '@/lib/firebase';
import { IconList, IconUrls, IconNames } from '@/components/icons/IconConstants';
import { SignIn } from '@clerk/clerk-react';
import Header from '@/components/Header';

const Icons = IconList.map((Icon, index) => ({
    icon: <Icon />,
    url: IconUrls[index],
    name: IconNames[index],
}));

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            window.location.href = '/';
        } catch (error) {
            alert('Failed to sign in');
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className="flex w-screen h-screen overflow-hidden">
                <div className="w-1/2 h-screen">
                    <Intro />
                </div>
                <div className="w-1/2 h-screen overflow-auto">
                    <div className="h-screen">
                        <HeroContent />
                    </div>
                    <div className="h-screen bg-red-400 flex flex-col justify-center items-center">
                        <p className="m-4 text-2xl font-bold">Login</p>
                        {!user ? (
                            <SignIn />
                        ) : (
                            <>
                                <p>Welcome, {user.displayName}!</p>
                                <Link href="/items/">test</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
