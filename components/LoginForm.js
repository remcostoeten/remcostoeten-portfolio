'use client';
import { useContext } from 'react';
import { AuthContext } from '@/lib/authContext';

const LoginForm = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    return (
        <div>
            <h2>Login Form</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default LoginForm;
