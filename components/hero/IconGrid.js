import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import { IconList as iconList, IconUrls as iconUrls } from '../icons/IconConstants';

const Icons = iconList.map((Icon, index) => ({
    icon: <Icon />,
    url: iconUrls[index],
}));

const IconGrid = () => {
    const iconRefs = useRef(Icons.map(() => React.createRef()));

    useEffect(() => {
        let delay = 0;

        iconRefs.current.forEach((ref) => {
            if (ref.current) {
                ref.current.style.animation = `scaleUp 1.5s cubic-bezier(.6,.15,0,1.62) forwards 120ms`;
                delay += 0.7;
            }
        });
    }, []);

    return (
        <div className="grid w-full mx-auto animate-fadeIn">
            <h2 className="text-slate-50 text-4xl pl-9">
                My <strong>web</strong>develop tools
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pl-4 pr-28 gap-x-0 py-10 gap-y-4">
                {Icons.map((item, index) => (
                    <Link href={item.url} className="flexflex relative group mx-auto  bg-white border-2 border-primary rounded-md p-8">
                        <div className="flex min-h-[110px] max-h-[110px] w-[110px] items-center justify-center h-full display" ref={iconRefs.current[index]}>
                            {item.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IconGrid;
