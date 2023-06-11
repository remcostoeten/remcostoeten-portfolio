'use client';
import { useEffect } from 'react';

const ParallaxEffect = () => {
	useEffect(() => {
		const body = document.body;

		const updateScale = (event) => {
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 2;
			const distanceX = (event.clientX - centerX) / centerX;
			const distanceY = (event.clientY - centerY) / centerY;
			const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

			const minScale = 1;
			const maxScale = 1.01;
			const scaleRange = maxScale - minScale;
			const scale = minScale + scaleRange * distance;

			body.style.transformOrigin = `${event.clientX}px ${event.clientY}px`;
			body.style.transform = `scale(${Math.min(scale, maxScale)})`;
		};

		document.addEventListener('mousemove', updateScale);

		return () => {
			document.removeEventListener('mousemove', updateScale);
		};
	}, []);

	return null;
};

export default ParallaxEffect;
