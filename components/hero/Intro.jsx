'use client';
import React, { useState } from 'react';
import IconIconExternalLink from '@/components/icons/Link';
import Link from 'next/link';
import Logo from '../icons/logo';
import YouTube from 'react-youtube';
import CursorPointer from '../Cursor';
import ToggleColor from '../ToggleColor';
import Modal from '../ui-elements/modal';

export default function Intro() {
	const [mouseSize, setMouseSize] = useState(25);
	const [showModal, setShowModal] = useState(false);
	const [emoji, setEmoji] = useState(null);

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			modestbranding: 1,
			rel: 0,
		},
	};
	return (
		<>
			<ToggleColor />
			<div className="hero__left p-10 md:p-20 bg-themeblue h-screen theme-text grid items-center fixed md:w-1/2 justify-center content-between">
				<Logo />
				<div className="flex  flex-col color-theme mb-72">
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
						<span
							onMouseEnter={() => {
								setMouseSize(155);
								setEmoji('👀');
							}}
							onMouseLeave={() => {
								setMouseSize(25);
								setEmoji(null);
							}}
							onClick={() => setShowModal(true)}
							className="relative cursor-Link"
						>
							Remco
						</span>
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
					</h1>
					<Modal />
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
						className="text-theme bg-transparent align-baseline border-2 color-theme rounded-full py-2 px-11 transition duration-250 ease-in-out select-none hover:bg-themered hover:text-themeblue self-start text-base mt-6 font-bold"
						onMouseEnter={() => {
							setMouseSize(55);
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
				<div className="self-end theme-gray font-semibold text-base">
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
								setMouseSize(66);
							}}
							onMouseLeave={() => {
								setMouseSize(25);
							}}
						>
							....lost count
						</span>
						)
					</p>
				</div>
				<CursorPointer size={mouseSize} emoji={emoji} />
			</div>
			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span
							className="close"
							onClick={() => setShowModal(false)}
						>
							&times;
						</span>
						<div className="video-container">
							<YouTube videoId="6V3VTUjs5_U" opts={opts} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
