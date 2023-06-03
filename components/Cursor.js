import React, { useState, useEffect } from 'react';

const CursorPointer = ({ text, size = 75, color = '#fd8e8e', isHovered }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		// if mouse is out of the window, set position to 0, 0
		const handleMouseOut = () => {
			setPosition({ x: 0, y: 0 });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className="cursor"
			style={{
				position: 'fixed',
				top: position.y + 15,
				left: position.x + 15,
				width: size,
				height: size,
				mixBlendMode: 'difference',
				borderRadius: '50%',
				backgroundColor: color,
				pointerEvents: 'none',
				zIndex: 100,
				transform: 'translate(-50%, -50%)',
				transition: 'width 0.2s, height 0.2s, background-color 0.2s',
			}}
		></div>
	);
};

export default CursorPointer;
