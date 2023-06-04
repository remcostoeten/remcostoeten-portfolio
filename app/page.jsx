'use client';

import React from 'react';
import Intro from '@/components/hero/Intro';
import OffCanvasMenu from '@/components/OffcanvasMenu';
import Es6 from '@/components/icons/Es6';
import Sass from '@/components/icons/Sass';
import Photoshop from '@/components/icons/Photoshop';
import HtmlIcon from '@/components/icons/Html';
import ReactIcon from '@/components/icons/ReactIcon';
import Magento from '@/components/icons/magento';
import BootstrapIcon from '@/components/icons/BootstrapIcon';
import AdobeIcon from '@/components/icons/AdobeIcon';
import FirebaseLogo from '@/components/icons/todo/firebase';
import StyledComponentIcon from '@/components/icons/StyledComponentIcon';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import JiraIcon from '@/components/icons/Jira';
import GitIcon from '@/components/icons/Git';
import Vim from '@/components/icons/Vim';
import Sketch from '@/components/icons/Sketch';
import Mui from '@/components/icons/Mui';
import NpmIcon from '@/components/icons/NpmIcon';
import Next from '@/components/icons/Next';

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
	{ icon: <NpmIcon />, name: 'Npm' },
	{ icon: <Mui />, name: 'Material-UI' },
	{ icon: <FirebaseLogo />, name: 'Firebase' },
];

const IconComponent = ({ icon, name }) => (
	<div className="icons__icon flex flex-col items-center justify-center mx-2 my-4">
		{icon}
		<span className="icons__icon-name text-white text-xs mt-2">{name}</span>
	</div>
);

export default function Home() {
	return (
		<>
			<div className="initialHide flex hero flex-col md:flex-row">
				<Intro />
				<div className="sm:absolute r-0 md:w-1/2 scroll-height w-auto icons bg-violet-400  gap-24 p-0 justify-start justify-items-center content-start">
					{icons.map((item, index) => (
						<IconComponent
							key={index}
							icon={item.icon}
							name={item.name}
						/>
					))}
					<OffCanvasMenu />
				</div>
			</div>
		</>
	);
}
