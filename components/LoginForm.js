'use client';
'use client';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase'; // replace with your firebase.js file path

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const signInWithGoogle = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            window.location.href = '/';
        } catch (error) {
            alert('Failed to sign in');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Login Form</h2>
            <button onClick={signInWithGoogle} disabled={loading}>
                {loading ? 'Loading...' : 'Sign in with Google'}
            </button>
        </div>
    );
};

export default LoginForm;
