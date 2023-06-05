'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Intro from '@/components/hero/Intro';
import OffCanvasMenu from '@/components/OffcanvasMenu';
import Es6 from '@/components/icons/Es6';
import Sass from '@/components/icons/sass';
import Photoshop from '@/components/icons/photoshop';
import HtmlIcon from '@/components/icons/Html';
import ReactIcon from '@/components/icons/ReactIcon';
import Magento from '@/components/icons/magento';
import BootstrapIcon from '@/components/icons/BootstrapIcon';
import AdobeIcon from '@/components/icons/AdobeIcon';
import StyledComponentIcon from '@/components/icons/StyledComponentIcon';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import JiraIcon from '@/components/icons/jira';
import Vim from '@/components/icons/Vim';
import GitIcon from '@/components/icons/git';
import Sketch from '@/components/icons/Sketch';
import Mui from '@/components/icons/Mui';
import NpmIcon from '@/components/icons/NpmIcon';
import Next from '@/components/icons/next';
import FirebaseLogo from '@/components/icons/FirebaseLogo';
import Logo from '@/components/icons/logo';
import AlertMessage from '@/components/ui-elements/AlertMessage';

const IconList = [
	Es6,
	HtmlIcon,
	Sass,
	Photoshop,
	ReactIcon,
	Magento,
	Next,
	BootstrapIcon,
	AdobeIcon,
	StyledComponentIcon,
	TypescriptIcon,
	JiraIcon,
	GitIcon,
	Vim,
	NpmIcon,
	Sketch,
	FirebaseLogo,
	NpmIcon,
	Mui,
];

const IconNames = [
	'ES6',
	'HTML',
	'Sass',
	'Photoshop',
	'React',
	'Magento',
	'Next.js',
	'Bootstrap',
	'Adobe',
	'Styled Components',
	'TypeScript',
	'Jira',
	'Git',
	'Vim',
	'Npm',
	'Sketch',
	'Firebase',
	'Npm',
	'Material-UI',
];

const IconUrls = [
	'https://es6.io/',
	'https://developer.mozilla.org/en-US/docs/Web/HTML',
	'https://sass-lang.com/',
	'https://www.adobe.com/products/photoshop.html',
	'https://reactjs.org/',
	'https://magento.com/',
	'https://nextjs.org/',
	'https://getbootstrap.com/',
	'https://www.adobe.com/',
	'https://styled-components.com/',
	'https://www.typescriptlang.org/',
	'https://www.atlassian.com/software/jira',
	'https://git-scm.com/',
	'https://www.vim.org/',
	'https://www.npmjs.com/',
	'https://www.sketch.com/',
	'https://firebase.google.com/',
	'https://www.npmjs.com/',
	'https://mui.com/',
];

const Icons = IconList.map((Icon, index) => ({
	icon: <Icon />,
	url: IconUrls[index],
}));

const IconComponent = ({ icon, name, url }) => (
	<div className="icons__icon flex flex-col-reverse items-center justify-center">
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
);

export default function Home() {
	const shuffledIcons = [...Icons].sort(() => Math.random() - 0.5);
	const [showSuccessMessage, setShowSuccessMessage] = useState(true);

	useEffect(() => {
		const iconElements = document.querySelectorAll('.icons__icon');
		iconElements.forEach((element, index) => {
			element.style.animationDelay = `${(index + 1) * 0.1}s`;
		});
	}, []);

	const handleClose = () => {
		const toast = document.getElementById('toast-success');
		if (toast) {
			toast.remove();
		}
	};

	return (
		<>
			<div className="flex flex-col md:flex-row justify-between w-full">
				<div className="w-full h-screen md:w-1/2">
					<Intro />
				</div>
				<div className="-z-1 w-full md:w-1/2 md:fixed scroll-height r-0 scroll-height icons theme-color grid content-start flex-wrap pt-32 grid-col-container grid-flow-row p-11 z-50 xl:pl-28 xl:pr-28">
					<OffCanvasMenu />
					<h1 className="absolute text-white p-11 text-4xl font-extralight xl:pl-28">
						<span className="font-bold">web</span>develop tools
					</h1>
					{shuffledIcons.map((item, index) => (
						<IconComponent
							key={index}
							icon={item.icon}
							name={item.name}
							url={item.url}
						/>
					))}
				</div>
			</div>
			{showSuccessMessage && (
				<AlertMessage
					id="toast-success"
					type="success"
					message="Site is currently under construction. We apologize for any inconvenience caused."
					onClose={handleClose}
				/>
			)}
		</>
	);
}
