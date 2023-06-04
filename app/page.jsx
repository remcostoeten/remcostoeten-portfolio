'use client';

import React, { useState, useContext } from 'react';
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
import CursorPointer from '@/components/Cursor';
import { MouseSizeProvider } from '@/components/MouseSizeProvider';
import { MouseSizeContext } from '@/lib/MouseSizeContext';
const icons = [
	{ icon: <Es6 />, name: 'ES6' },
	{ icon: <HtmlIcon />, name: 'HTML' },
	{ icon: <Sass />, name: 'Sass' },
	{ icon: <Photoshop />, name: 'Photoshop' },
	{ icon: <ReactIcon />, name: 'React' },
	{ icon: <Magento />, name: 'Magento' },
	{ icon: <Next />, name: 'Next.js' },
	{ icon: <BootstrapIcon />, name: 'Bootstrap' },
	{ icon: <AdobeIcon />, name: 'Adobe' },
	{ icon: <StyledComponentIcon />, name: 'Styled Components' },
	{ icon: <TypescriptIcon />, name: 'TypeScript' },
	{ icon: <JiraIcon />, name: 'Jira' },
	{ icon: <GitIcon />, name: 'Git' },
	{ icon: <Vim />, name: 'Vim' },
	{ icon: <NpmIcon />, name: 'Npm' },
	{ icon: <ReactIcon />, name: 'React' },
	{ icon: <Sketch />, name: 'Sketch' },
	{ icon: <FirebaseLogo />, name: 'Firebase' },
	{ icon: <NpmIcon />, name: 'Npm' },
	{ icon: <Mui />, name: 'Material-UI' },
];

const IconComponent = ({ icon, name }) => {
	const randomDegree = Math.floor(Math.random() * 7) - 3; // Random number between -3 and 3

	return (
		<div className="icons__icon flex flex-col items-center justify-center">
			<span
				style={{
					'--randomRotate': `${randomDegree}deg`,
				}}
			>
				{icon}
			</span>
		</div>
	);
};

export default function Home() {
	const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);

	return (
		<>
			<div className="initialHide flex hero flex-col md:flex-row">
				<Intro />
				<div
					className="absolute r-0 md:w-1/2 scroll-height w-full icons bg-violet-400 grid content-start flex-wrap pt-44  grid-col-container  grid-flow-row  p-11"
					onMouseEnter={() => {
						setMouseSize(155);
					}}
				>
					{shuffledIcons.map((item, index) => (
						<IconComponent key={index} icon={item.icon} />
					))}
					<OffCanvasMenu />
				</div>
			</div>
		</>
	);
}
