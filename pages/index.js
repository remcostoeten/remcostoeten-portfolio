import { useState } from 'react';
import Navbar from 'components/header/Navbar';
import CircleWithBorder from 'components/landing/CircleComponent';
import GradientCircle from 'components/landing/GradientCircle';
import IntroText from 'components/landing/IntroText';

export default function Index() {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = (hovered) => {
		setIsHovered(hovered);
	};

	return (
		<>
			<div style={{ position: 'relative' }}>
				<IntroText />
				<GradientCircle />
				<CircleWithBorder isHovered={isHovered} />
			</div>
			<Navbar handleHover={handleHover} />
		</>
	);
}
