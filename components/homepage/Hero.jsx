import Header from 'components/header/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<>
			<AnimatePresence wait>
				<motion.div
					className="rounded-3xl hero my-10 mx-12  pl-4 pt-4 pb-12 pr-124 bg-heroBg h-screen"
					initial="hidden"
					animate="show"
					exit="exit"
					variants={variants}
				>
					<div className="">
						<Header />
						<motion.div
							className="pl-2.5 pt-8 font-poppins font-bold text-4xl leading-8 text-white text-shadow"
							variants={variants}
						>
							Olah! Remco here.
							<br />
							I'm a{' '}
							<span className="animate bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
								Frontend Developer
							</span>{' '}
							<br />
							based in
							<span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
								the Netherlands
							</span>
							.
						</motion.div>
					</div>
					<motion.div
						whileHover={{
							rotateX: 10,
							rotateY: 10,
							scale: 1.1,
						}}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="absolute left-1/2 transform -translate-x-1/2 top-118"
							style={{
								width: '49px',
								height: '42px',
								left: '75%',
							}}
						>
							<Image
								src="/hero/cube.png"
								alt="Cube"
								className="grow"
								layout="fill"
								objectFit="cover"
							/>
						</motion.div>
						<motion.div
							className="absolute left-1/2 transform -translate-x-1/2 top-118"
							style={{
								width: '289px',
								height: '316px',
								left: '50%',
							}}
						>
							<Image
								src="/hero/Saly.png"
								alt="Hero Image"
								layout="fill"
								objectFit="cover"
							/>
						</motion.div>
					</motion.div>
					<div className="bigBlur absolute  -top-1/4"></div>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
