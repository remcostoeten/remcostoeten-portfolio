'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Intro from '@/components/hero/Intro';
import Cookies from 'js-cookie';
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

import Vue from '@/components/icons/Vue';
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
	'Bootstrap',
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

	useEffect(() => {
		const iconElements = document.querySelectorAll('.icons__icon');
		iconElements.forEach((element, index) => {
			element.style.animationDelay = `${(index + 1) * 0.1}s`;
		});
	}, []);

	useEffect(() => {
		const cookie = Cookies.get('hideBanner');

		if (cookie === 'true') {
			setShowSuccessMessage(false);
		}
	}, []);

	const closeBanner = () => {
		setShowSuccessMessage(false);
		Cookies.set('hideBanner', 'true', { expires: 7 });
	};

	return (
		<>
			<div className="flex flex-col md:flex-row justify-between w-full">
				<div className="w-full h-screen md:w-1/2">
					<Intro />
				</div>
				<div className="icon-wrapper -z-1 w-full md:w-1/2 md:fixed scroll-height r-0 scroll-height icons theme-color grid content-start flex-wrap pt-32 grid-col-container grid-flow-row p-11 z-50 xl:pl-28 xl:pr-28">
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
		</>
	);
}
