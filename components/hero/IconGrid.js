import React from 'react';
import Link from 'next/link';
import AdobeIcon from '../icons/AdobeIcon';
import Es6 from '../icons/Es6';
import HtmlIcon from '../icons/Html';
import Sass from '../icons/Sass';
import Photoshop from '../icons/Photoshop';
import ReactIcon from '../icons/ReactIcon';
import Magento from '../icons/Magento';
import Next from '../icons/next';
import BootstrapIcon from '../icons/BootstrapIcon';
import StyledComponentIcon from '../icons/StyledComponentIcon';
import TypescriptIcon from '../icons/TypescriptIcon';
import GitIcon from '../icons/git';
import Vim from '../icons/Vim';
import NpmIcon from '../icons/NpmIcon';
import Sketch from '../icons/Sketch';
import FirebaseLogo from '../icons/FirebaseLogo';
import Vue from '../icons/Vue';
import Mui from '../icons/Mui';
import JiraIcon from '../icons/jira';

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
    NpmIcon,
    Vue,
    Mui,
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

const IconGrid = () => {
    return (
        <div className="grid w-full mx-auto animate-fadeIn">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-8 py-8 gap-4">
                {Icons.map((item, index) => (
                    <article key={index} className="flex align-bottom items-center justify-center">
                        <Link href={item.url} className="relative group block bg-white border-2 border-primary rounded-md p-5">
                            <div className="flex min-h-[75px] max-h-[75px] w-[75px] items-center justify-center h-full">{item.icon}</div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default IconGrid;
