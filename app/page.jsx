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
			<div className="flex hero flex-col md:flex-row">
				<Intro />
				<div
					className={`flex absolute r-0 w-1/2 scroll-height ${scrollBgClass}`}
				></div>
			</div>
			<section
				id="tools"
				className="flex flex-col items-center justify-center bg-themeblue"
			>
				<div className="flex flex-col items-center justify-center w-full">
					<h2 className="text-4xl font-bold text-center text-themered">
						Tools
					</h2>
					<p className="text-center text-themered">
						These are some of the tools I use to create things.
					</p>
				</div>
				<div className="flex flex-col md:flex-row w-full justify-center items-center">
					<div className="flex flex-col items-center justify-center w-full md:w-1/3">
						<Image
							src="/images/nextjs.svg"
							alt="NextJS"
							width={200}
							height={200}
						/>
						<h3 className="text-2xl font-bold text-center text-themered">
							NextJS
						</h3>
						<p className="text-center text-themered">
							NextJS is a React framework that allows you to
							create server-side rendered React applications
						</p>
					</div>

					<div className="flex flex-col items-center justify-center w-full md:w-1/3">
						<Image
							src="/images/tailwindcss.svg"
							alt="TailwindCSS"
							width={200}
							height={200}
						/>

						<h3 className="text-2xl font-bold text-center text-themered">
							TailwindCSS
						</h3>
						<p className="text-center text-themered">
							TailwindCSS is a utility-first CSS framework that
							allows you to create custom designs without writing
							any CSS
						</p>
					</div>

					<div className="flex flex-col items-center justify-center w-full md:w-1/3">
						<Image
							src="/images/vercel.svg"
							alt="Vercel"
							width={200}
							height={200}
						/>
						<h3 className="text-2xl font-bold text-center text-themered">
							Vercel
						</h3>
						<p className="text-center text-themered">
							Vercel is a cloud platform for static sites and
							Serverless Functions that fits perfectly with your
							workflow
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
