'use client';
import { useContext } from 'react';
import { AuthContext } from '@/lib/authContext';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Intro from '@/components/hero/Intro';
import Es6 from '@/components/icons/Es6';
import Sass from '@/components/icons/Sass';
import Photoshop from '@/components/icons/Photoshop';
import HtmlIcon from '@/components/icons/Html';
import ReactIcon from '@/components/icons/ReactIcon';
import Magento from '@/components/icons/Magento';
import BootstrapIcon from '@/components/icons/BootstrapIcon';
import AdobeIcon from '@/components/icons/AdobeIcon';
import StyledComponentIcon from '@/components/icons/StyledComponentIcon';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import JiraIcon from '@/components/icons/Jira';
import Vim from '@/components/icons/Vim';
import GitIcon from '@/components/icons/Git';
import Sketch from '@/components/icons/Sketch';
import Mui from '@/components/icons/Mui';
import NpmIcon from '@/components/icons/NpmIcon';
import Next from '@/components/icons/Next';
import FirebaseLogo from '@/components/icons/FirebaseLogo';
import Vue from '@/components/icons/Vue';
import HeroContent from './../components/hero/HeroContent';
import LoginForm from '@/components/LoginForm';

const IconList = [
    AdobeIcon,
    Es6,
    HtmlIcon,
    Sass,
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
    Mui,
    Vue,
];

const IconNames = [
    'AdobeIcon',
    'ES6',
    'HTML',
    'Sass',
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
];

const IconUrls = [
    'https://adobe.com',
    'https://es6.io/',
    'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'https://sass-lang.com/',
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
];

const Icons = IconList.map((Icon, index) => ({
    icon: <Icon />,
    url: IconUrls[index],
}));

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

export default function Home() {
    const { user, signInWithGoogle } = useContext(AuthContext);

    return (
        <>
            {!user ? (
                <button onClick={signInWithGoogle} className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-500">
                    Sign in with Google
                </button>
            ) : (
                <>
                    <p>Welcome, {user.displayName}!</p>
                    <Link href="/docs/test/">test</Link>
                </>
            )}
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
                            <LoginForm />
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
