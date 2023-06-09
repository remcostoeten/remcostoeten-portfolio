'use client';
import React, { useState, useEffect } from 'react';

export default function AlertMessage({ id, type, message }) {
    const [showAlert, setShowAlert] = useState(true);

    const handleClose = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        localStorage.setItem('showAlert', showAlert.toString());
    }, [showAlert]);

    useEffect(() => {
        const storedShowAlert = localStorage.getItem('showAlert');
        if (storedShowAlert !== null) {
            setShowAlert(storedShowAlert === 'true');
        }
    }, []);

    return showAlert ? (
        <div
            id={id}
            className={`z-50 flex align-middle items-center absolute bottom-5 left-0 right-0 mx-auto text-cente max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-950 ${
                type === 'success' ? 'border-green-500' : type === 'danger' ? 'border-red-500' : 'border-orange-500'
            }`}
            role="alert"
        >
            <div className="ml-0 text-sm font-normal">{message}</div>
            <button
                type="button"
                onClick={handleClose}
                className="ml-auto mx-3.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white  dark:hover:bg-gray-700"
            >
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    ) : null;
}
