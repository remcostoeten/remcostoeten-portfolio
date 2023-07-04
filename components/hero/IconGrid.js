import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AdobeIcon from '../icons/AdobeIcon';
import Es6 from '../icons/Es6';
import HtmlIcon from '../icons/Html';
import Photoshop from '../icons/PhotoshopIcon';
import ReactIcon from '../icons/ReactIcon';
import Magento from '../icons/MagentoIcon';
import Next from '../icons/NextIcon';
import BootstrapIcon from '../icons/BootstrapIcon';
import StyledComponentIcon from '../icons/StyledComponentIcon';
import TypescriptIcon from '../icons/TypescriptIcon';
import GitIcon from '../icons/GitIcon';
import Vim from '../icons/Vim';
import NpmIcon from '../icons/NpmIcon';
import Sketch from '../icons/Sketch';
import FirebaseLogo from '../icons/FirebaseLogo';
import Vue from '../icons/Vue';
import Mui from '../icons/Mui';
import JiraIcon from '../icons/JiraIcon';
import RedisIcon from './../icons/RedisIcon';
import MagentoIcon from '../icons/MagentoIcon';

const IconList = [
    AdobeIcon,
    Es6,
    HtmlIcon,
    Photoshop,
    ReactIcon,
    Magento,
    Next,
    BootstrapIcon,
    StyledComponentIcon,
    TypescriptIcon,
    JiraIcon,
    GitIcon,
    Vim,
    NpmIcon,
    Sketch,
    FirebaseLogo,
    NpmIcon,
    Vue,
    Mui,
    RedisIcon,
    MagentoIcon,
];

const IconNames = [
    'AdobeIcon',
    'ES6',
    'HTML',
    'Photoshop',
    'React',
    'Magento',
    'Next.js',
    'Styled Components',
    'TypeScript',
    'Jira',
    'Git',
    'Vim',
    'Npm',
    'Sketch',
    'Firebase',
    'Npm',
    'Vue',
    'Material-UI',
    'Redis',
    'Magento',
];

const IconUrls = [
    'https://adobe.com',
    'https://es6.io/',
    'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'https://www.adobe.com/products/photoshop.html',
    'https://reactjs.org/',
    'https://magento.com/',
    'https://nextjs.org/',
    'https://getbootstrap.com/',
    'https://styled-components.com/',
    'https://www.typescriptlang.org/',
    'https://www.atlassian.com/software/jira',
    'https://git-scm.com/',
    'https://www.vim.org/',
    'https://www.npmjs.com/',
    'https://www.sketch.com/',
    'https://firebase.google.com/',
    'https://www.npmjs.com/',
    'https://vuejs.org/',
    'https://mui.com/',
    'https://redis.io/',
    'https://magento.com/',
];

const Icons = IconList.map((Icon, index) => ({
    icon: <Icon />,
    url: IconUrls[index],
}));

const IconGrid = () => {
    const iconRefs = useRef(Icons.map(() => React.createRef()));

    useEffect(() => {
        let delay = 0;

        iconRefs.current.forEach((ref) => {
            if (ref.current) {
                ref.current.style.animation = `scaleUp 1.5s cubic-bezier(.6,.15,0,1.62) forwards 120ms`;
                delay += 0.04;
            }
        });
    }, []);

    return (
        <div className="grid w-full mx-auto animate-fadeIn">
            <h2 className="text-slate-50 text-4xl pl-9">
                My <strong>web</strong>develop tools
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 pl-4 pr-28 gap-x-0 py-10 gap-y-3.5">
                {Icons.map((item, index) => (
                    <Link href={item.url} className="flex relative group mx-auto  bg-white border-2 border-primary rounded-md p-5">
                        <div className="flex min-h-[75px] max-h-[75px] w-[75px] items-center justify-center h-full display" ref={iconRefs.current[index]}>
                            {item.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IconGrid;
