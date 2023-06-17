import { get } from 'http';
import React, { useState, useEffect, use } from 'react';

const CursorPointer = ({ size = 75, color = '#fd8e8e', emoji }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [styleBlendmode, setStyleBlendmode] = useState('difference');

	useEffect(() => {
		const handleMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const blendmode = () => {
			setStyleBlendmode('exclusion');
		};
		blendmode(); // Call the function directly since it doesn't depend on any state or props
	}, []);

	const getTransformValue = () => {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const deltaX = position.x - centerX;
		const deltaY = position.y - centerY;
		const angle = Math.atan2(deltaY, deltaX) * (50 / Math.PI);
		return `rotate(${angle}deg)`;
	};

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
				backgroundColor: 'black',
				borderRadius: '50%',
				pointerEvents: 'none',
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				className="hand"
				version="1.1"
				viewBox="0 0 512.001 512.001"
				xmlSpace="preserve"
				style={{
					transform: getTransformValue(), // Use 'transform' instead of 'rotate'
				}}
			>
				<path
					fill="#EFC27B"
					d="M409.535 155.136l-116.306-.065V69.776C293.229 31.302 261.927 0 223.452 0c-38.476 0-69.776 31.302-69.776 69.776v241.18l-50.982-25.932c-9.62-4.819-20.418-7.367-31.227-7.367-38.476 0-69.776 31.302-69.776 69.776 0 26.602 14.786 50.524 38.593 62.433l199.321 99.673A23.16 23.16 0 00249.989 512l185.986-.456c12.603 2.518 24.848-5.653 27.365-18.25l46.518-232.814c.299-1.501.451-3.027.451-4.557.002-55.573-45.212-100.787-100.774-100.787z"
				></path>
				<path
					fill="#ECB45C"
					d="M293.229 69.776C293.229 31.302 261.927 0 223.452 0c-38.476 0-69.776 31.302-69.776 69.776v241.18l-50.982-25.932c-9.62-4.819-20.418-7.367-31.227-7.367-38.476 0-69.776 31.302-69.776 69.776 0 26.602 14.786 50.524 38.593 62.433l199.321 99.673A23.16 23.16 0 00249.989 512l43.24-.105V69.776z"
				></path>
				<path
					fill="#FFB655"
					d="M409.535 155.136l-116.306-.064V69.776C293.229 31.3 261.927 0 223.452 0s-69.776 31.302-69.776 69.776v241.18l-50.982-25.932c-9.62-4.819-20.418-7.367-31.227-7.367-38.476 0-69.776 31.302-69.776 69.776 0 26.602 14.786 50.524 38.593 62.433l199.321 99.673A23.16 23.16 0 00249.989 512c8.531 0 16.746-4.712 20.821-12.861a23.125 23.125 0 002.436-10.403c-.008-8.525-4.694-16.731-12.836-20.803L61.09 368.261c-7.945-3.976-12.882-11.955-12.882-20.829 0-12.825 10.434-23.259 23.259-23.259 3.662 0 7.159.82 10.263 2.375l84.659 43.061a23.26 23.26 0 0033.804-20.731V69.776c0-12.825 10.434-23.259 23.259-23.259 12.825 0 23.259 10.434 23.259 23.259v108.541c0 12.84 10.406 23.251 23.245 23.259l139.567.078c29.222 0 53.123 23.215 54.232 52.171l-46.028 230.356a23.29 23.29 0 00-.448 4.557c-.012 10.871 7.632 20.596 18.698 22.808 12.603 2.518 24.848-5.653 27.365-18.25l46.518-232.814c.299-1.501.451-3.027.451-4.557 0-55.575-45.214-100.789-100.776-100.789z"
				></path>
				<path
					fill="#EE8700"
					d="M293.229 69.776C293.229 31.302 261.927 0 223.452 0c-38.476 0-69.776 31.302-69.776 69.776v241.18l-50.982-25.932c-9.62-4.819-20.418-7.367-31.227-7.367-38.476 0-69.776 31.302-69.776 69.776 0 26.602 14.786 50.524 38.593 62.433l199.321 99.673A23.16 23.16 0 00249.989 512c8.531 0 16.746-4.712 20.821-12.861a23.125 23.125 0 002.436-10.403c-.008-8.525-4.694-16.731-12.836-20.803L61.09 368.261c-7.945-3.974-12.882-11.955-12.882-20.829 0-12.825 10.432-23.259 23.259-23.259 3.662 0 7.159.82 10.263 2.375l84.659 43.061a23.26 23.26 0 0033.804-20.731V69.776c0-12.825 10.434-23.259 23.259-23.259 12.825 0 23.259 10.434 23.259 23.259v108.541c0 12.84 10.406 23.251 23.245 23.259l23.273.012V69.776z"
				></path>
			</svg>
		</div>
	);
};

export default CursorPointer;
