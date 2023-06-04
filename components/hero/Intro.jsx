'use client';
import React, { useState, useEffect } from 'react';
import IconIconExternalLink from '@/components/icons/Link';
import Link from 'next/link';
import Logo from '../icons/logo';
import YouTube from 'react-youtube';
import CursorPointer from '../Cursor';
export default function Intro() {
	const [mouseSize, setMouseSize] = useState(25);
	const [showModal, setShowModal] = useState(false);

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 0,
			controls: 0,
			showinfo: 0,
		},
	};
	return (
		<>
			<CursorPointer size={mouseSize} mouseSize={mouseSize} />
			<div className="hero__left p-10 md:p-20 bg-themeblue h-screen text-themered grid items-center fixed md:w-1/2 justify-center content-between">
				<Logo />
				<div className="flex flex-col text-themered mb-72">
					<h1
						className="w-3/5 text-bold relative text-6xl font-bold scroll-m-80 snap-center caret-yellow-300 scroll-smooth mb-3"
						onMouseEnter={() => {
							setMouseSize(155);
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
							<span
								onClick={() => setShowModal(true)}
								className="relative"
							>
								Remco
							</span>{' '}
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
							href="https://www.previous.remcostoeten.com/"
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
							className="text-xs italic"
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
			{showModal && (
				<div
					className="fixed z-10 inset-0 overflow-y-auto"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
					onMouseEnter={() => {
						setMouseSize(90);
					}}
					onMouseLeave={() => {
						setMouseSize(25);
					}}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<div className="absolute r-0 md:w-1/2 scroll-height w-full icons bg-violet-400 grid content-start flex-wrap pt-44 grid-col-container grid-flow-row  p-11">
							<div>
								<div className="mt-3 text-center sm:mt-5">
									<YouTube
										videoId="6V3VTUjs5_U"
										opts={opts}
									/>
								</div>
							</div>
							<div className="mt-5 sm:mt-6">
								<button
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
									onClick={() => setShowModal(false)}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
