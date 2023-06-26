import React from 'react';

const LoginSection = ({ handleLogin }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
            <button onClick={handleLogin} className="bg-themeblue text-offwhite px-4 py-2 rounded-lg mb-4">
                Login
            </button>
        </div>
    );
};

export default LoginSection;
