import Navbar from 'components/header/Navbar';
import CircleWithBorder from 'components/landing/CircleComponent';
import GradientCircle from 'components/landing/GradientCircle';
import IntroText from 'components/landing/IntroText';
import React from 'react';

export default function Index() {
	return (
		<>
			<div style={{ position: 'relative' }} className="">
				<IntroText />
				<GradientCircle />
				<CircleWithBorder />
			</div>
			<Navbar handleHover={handleHover} />
		</>
	);
}
