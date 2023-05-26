import { useState } from 'react';
import Navbar from 'components/header/Navbar';
import CircleWithBorder from 'components/landing/OuterRingCircle';
import GradientCircle from 'components/landing/GradientCircle';
import IntroText from 'components/landing/IntroText';

export default function Index() {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = (hovered) => {
		setIsHovered(hovered);
	};

	return (
		<>
			<Navbar handleHover={handleHover} />
			<div>
				<IntroText />
				<GradientCircle />
				<CircleWithBorder isHovered={isHovered} />
			</div>
		</>
	);
}
