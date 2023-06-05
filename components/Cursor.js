import React, { useState, useEffect } from 'react';

const CursorPointer = ({ size = 75, color = '#fd8e8e', emoji }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const EyeEmojiSvg = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 47.5 47.5"
			viewBox="0 0 47.5 47.5"
			id="eye"
		>
			<defs>
				<clipPath id="a">
					<path d="M0 38h38V0H0v38Z"></path>
				</clipPath>
			</defs>
			<g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
				<path
					fill="#ffcc4d"
					d="M0 0c0-9.389-7.611-17-17-17-9.388 0-17 7.611-17 17 0 9.388 7.612 17 17 17C-7.611 17 0 9.388 0 0"
					transform="translate(36 19)"
				></path>
				<path
					fill="#664500"
					d="M0 0c0-3.964 4.596-9 11-9s11 5 11 9c0 0-10.333-2.756-22 0"
					transform="translate(8 13.964)"
				></path>
				<path
					fill="#e75a70"
					d="M0 0v-6.083c0-3 2-6 6-6s6 3 6 6v6.042C5.708-1.333 0 0 0 0"
					transform="translate(13 12.083)"
				></path>
				<path
					fill="#664500"
					d="M0 0c-.114.085-1.931 1.426-4.646 2.344.027.115.046.233.046.356 0 .369-.138.703-.359.964 1.803.521 3.334.536 3.361.536a1 1 0 0 1-.002 2c-.22 0-5.451-.037-8.707-3.293A1 1 0 0 1-9.6 1.2c4.59 0 8.364-2.773 8.402-2.801a1.001 1.001 0 0 1 1.399.203A1 1 0 0 1 0 0"
					transform="translate(31.6 19.8)"
				></path>
				<path
					fill="#664500"
					d="M0 0c-3.255 3.255-8.486 3.293-8.707 3.293a1 1 0 0 1-.001-2c.026 0 1.558-.016 3.36-.536a1.492 1.492 0 0 1-.359-.964c0-.123.019-.241.047-.356-2.716-.918-4.533-2.259-4.647-2.344a1 1 0 0 1 1.2-1.6c.037.028 3.787 2.8 8.4 2.8A1.002 1.002 0 0 1 0 0"
					transform="translate(16.707 22.707)"
				></path>
			</g>
			s
		</svg>
	);

	return (
		<div
			className="cursor"
			style={{
				transition: 'width 0.2s, height 0.2s, background-color 0.2s',
				position: 'fixed',
				top: position.y + 15,
				left: position.x + 15,
				width: size,
				height: size,
				mixBlendMode: 'overlay',
				backgroundColor: emoji ? '' : color,
				borderRadius: '50%',
				backgroundColor: '#fd8e8e',
				pointerEvents: 'none',
				zIndex: 1000,
				transform: 'translate(-50%, -50%)',
				transition: 'width 0.2s, height 0.2s, background-color 0.2s',
			}}
		>
			{emoji === '👀' ? <EyeEmojiSvg /> : emoji}
		</div>
	);
};

export default CursorPointer;
