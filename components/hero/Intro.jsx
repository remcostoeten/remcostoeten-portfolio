'use client';
import Link from 'next/link';
import Logo from '../icons/logo';
import CursorPointer from '../Cursor';
import ToggleColor from '../ToggleColor';
import Modal from '../ui-elements/modal';
import LinkIcon from '@/components/icons/Link';
import { Fragment, useState } from 'react';
export default function Intro() {
	const [mouseSize, setMouseSize] = useState(25);
	const [emoji, setEmoji] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};
	const HappyEmojiSvg = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			fill="#111111"
		>
			<path d="M1.233 18s5.122-9.186 16.767-9.186S34.767 18 34.767 18 29.645 27.186 18 27.186 1.233 18 1.233 18z" />
			<path d="M18 22.19c-3.722 0-6.751-3.019-6.751-6.741s3.03-6.75 6.751-6.75 6.751 3.019 6.751 6.75-3.029 6.741-6.751 6.741zm0-11.232c-2.488 0-4.491 2.014-4.491 4.491s2.003 4.491 4.491 4.491 4.491-2.014 4.491-4.491-2.003-4.491-4.491-4.491z" />
		</svg>
	);

	return (
		<>
			{modalOpen && (
				<div
					className="absolute inset-0 backdrop-filter backdrop-blur-sm z-max"
					onClose={handleCloseModal}
				>
					<div
						className="flex text-white   flex-col justify-center items-center h-screen"
						onClick={handleCloseModal}
					>
						<div className="mb-4 shadow-sm">
							{' '}
							<h3 className="font-bold">
								Hello i'm remco from the Netherlands
							</h3>
							<p>
								source{' '}
								<Link
									className="underline"
									href="https://www.youtube.com/watch?v=6V3VTUjs5_U"
									target="_blank"
								>
									here
								</Link>
								. Obviously not me.{' '}
							</p>
						</div>
						<video className="outline-none shadow-2xl" controls>
							<source src="/remco.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			)}

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
								setMouseSize(70);
								setEmoji('👀');
							}}
							onMouseLeave={() => {
								setMouseSize(25);
								setEmoji(null);
							}}
							onClick={handleOpenModal}
							className="relative cursor-Link"
						>
							Remco <LinkIcon />
						</span>
						<span
							className="absolute font-sm"
							onMouseEnter={() => {
								setMouseSize(90);
							}}
							onMouseLeave={() => {
								setMouseSize(25);
							}}
						></span>
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
							setEmoji('😀');
						}}
						onMouseLeave={() => {
							setMouseSize(25);
							setEmoji(null);
						}}
					>
						<Link
							target="_blank"
							href="https://www.previous.remcostoeten.com/"
						>
							{' '}
							goto previous site
						</Link>
					</button>{' '}
					<CursorPointer size={mouseSize} emoji={emoji} />
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
		</>
	);
}
