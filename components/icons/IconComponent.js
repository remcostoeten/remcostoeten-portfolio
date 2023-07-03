import React from 'react';
import Link from 'next/link';

const IconComponent = ({ icon, name, url }) => (
    <div className="icons">
        <div className="icons__icon flex flex-col-reverse items-center justify-center" data-aos="fade-up">
            <Link href={url} target="_blank" rel="noopener noreferrer">
                {icon}
            </Link>
            <span
                style={{
                    '--randomRotate': `${Math.floor(Math.random() * 7) - 3}deg`,
                }}
            >
                {name}
            </span>
        </div>
    </div>
);

export default IconComponent;
