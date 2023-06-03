'use client';
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/ui-elements/Preloader';
import Image from 'next/image';
import Intro from '@/components/hero/Intro';

export default function Home() {
	const [scrollBgClass, setScrollBgClass] = useState('themered');

	useEffect(() => {
		const handleScroll = () => {
			const scrolledHeight = window.scrollY;
			const viewportHeight = window.innerHeight;
			if (scrolledHeight >= viewportHeight) {
				setScrollBgClass('bg-violet-400');
			} else {
				setScrollBgClass('themered');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Preloader />
			<div className="initialHide flex hero flex-col md:flex-row">
				<Intro />
				<div
					className={`flex absolute r-0 w-1/2 scroll-height ${scrollBgClass}`}
				></div>
			</div>
		</>
	);
}
