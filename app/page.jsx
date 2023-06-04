'use client';

import React from 'react';
import { MouseSizeContext } from '@/lib/MouseSizeContext';

import Intro from '@/components/hero/Intro';
import OffCanvasMenu from '@/components/OffcanvasMenu';

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
import GitIcon from '@/components/icons/Git';
import Vim from '@/components/icons/Vim';
import Sketch from '@/components/icons/Sketch';
import Mui from '@/components/icons/Mui';
import NpmIcon from '@/components/icons/NpmIcon';
import Next from '@/components/icons/Next';
import FirebaseLogo from '@/components/icons/FirebaseLogo';

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
	ReactIcon,
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
	'React',
	'Sketch',
	'Firebase',
	'Npm',
	'Material-UI',
];

const Icons = IconList.map((Icon, index) => ({
	icon: <Icon />,
	name: IconNames[index],
}));

const IconComponent = ({ icon }) => (
	<div className="icons__icon flex flex-col items-center justify-center">
		<span
			style={{
				'--randomRotate': `${Math.floor(Math.random() * 7) - 3}deg`,
			}}
		>
			{icon}
		</span>
	</div>
);

export default function Home() {
	const shuffledIcons = [...Icons].sort(() => Math.random() - 0.5);

	return (
		<>
			<div className="flex justify-between w-full">
				<div className="w-1/2">
					<Intro />
				</div>
				<div className="w-1/2 fixed scroll-height r-0  scroll-height w-1/2 icons theme-color grid content-start flex-wrap pt-32 grid-col-container grid-flow-row p-11 z-50">
					<OffCanvasMenu />
					<h1 className="absolute text-white p-11 text-4xl font-extralight">
						<span className="font-bold">web</span>develop tools
					</h1>
					{shuffledIcons.map((item, index) => (
						<IconComponent key={index} icon={item.icon} />
					))}
				</div>
			</div>
		</>
	);
}
