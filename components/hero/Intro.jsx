'use client';
import React, { useState, useEffect } from 'react';
import IconIconExternalLink from '@/components/icons/Link';
import Link from 'next/link';
import CursorPointer from '../Cursor';

export default function Intro() {
	const [mouseSize, setMouseSize] = useState(25);
	return (
		<>
			<CursorPointer size={mouseSize} />
			<div className="hero__left p-10 md:p-20 bg-themeblue h-screen text-themered grid items-center fixed w-1/2">
				<div className="flex flex-col text-themered">
					<h1
						className="w-3/5 text-bold relative text-6xl font-bold scroll-m-80 snap-center caret-yellow-300 scroll-smooth mb-3"
						onMouseEnter={() => {
							setMouseSize(155);
							c;
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						Hello.. my name is{' '}
						<a
							href="https://www.youtube.com/watch?v=6V3VTUjs5_U"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="relative">Remco</span>{' '}
							<span
								className="absolute font-sm"
								onMouseEnter={() => {
									setMouseSize(90);
								}}
								onMouseLeave={() => {
									setMouseSize(25);
								}}
							>
								<IconIconExternalLink />
							</span>
							from the Netherlands
						</a>
					</h1>
					<p
						className="text-xl font-normal"
						onMouseEnter={() => {
							setMouseSize(120);
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						I create things, mostly with code. Shift divs around and
						make them look pretty. Or well, at least I try to.
					</p>
					<button
						className="text-themered bg-transparent align-baseline border-2 border-themered rounded-full py-2 px-11 transition duration-250 ease-in-out select-none hover:bg-themered hover:text-themeblue self-start text-base mt-6 font-bold"
						onMouseEnter={() => {
							setMouseSize(90);
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						<Link
							target="_blank"
							href="https://previous.remcostoeten.com"
						>
							{' '}
							goto previous site
						</Link>
					</button>
				</div>
				<div className="self-end text-[#b4b5bc] font-semibold text-base">
					<p>
						Find me on{' '}
						<a
							className="text-white underline"
							href="https://github.com/remcostoeten"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>{' '}
						and{' '}
						<a
							className="text-white underline"
							href="https://nl.linkedin.com/in/remco-stoeten"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<br />
						Design iteration π(
						<span
							className="text-sm italic"
							onMouseEnter={() => {
								setMouseSize(90);
							}}
							onMouseLeave={() => {
								setMouseSize(25);
								set;
							}}
						>
							....lost count
						</span>
						)
					</p>
				</div>
			</div>
		</>
	);
}
