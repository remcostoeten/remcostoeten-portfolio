import React from 'react';
import styles from '@/styles/components/loader.module.scss';

export default function LoadingSpinner() {
    return (
        <div className="grid bg-[#0d0d0d] place-items-center h-screen w-screen">
            <div className="loadcon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
