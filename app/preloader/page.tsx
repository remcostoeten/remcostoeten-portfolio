'use client';
import PreloaderInfinite from '@/components/ui-elements/Preloader';
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
	const preloaderRef = useRef(null);
	const [playAnimation, setPlayAnimation] = useState(false);

	useEffect(() => {
		if (playAnimation) {
			const preloader = preloaderRef.current;

			if (preloader) {
				preloader.classList.remove('logo');

				setTimeout(() => {
					preloader.classList.add('logo');
				}, 1000);
			}

			// Reset playAnimation to false after playing
			setPlayAnimation(false);
		}
	}, [playAnimation]); // Run the effect whenever playAnimation changes

	const repeatAnimation = () => {
		setPlayAnimation(true);
	};

	return (
		<>
			<PreloaderInfinite />
		</>
	);
}
