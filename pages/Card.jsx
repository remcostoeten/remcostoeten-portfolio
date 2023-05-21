import Header from 'components/header/Header';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from 'styles/components/Card.module.scss';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function Card() {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
	}, []);

	return (
		<>
			<div className={styles.top}></div>
			<div className={styles.card}>
				<div className="card__outer">
					<div className="card__inner">
						<div className="card__top">
							<Header />
						</div>
						<div className={styles.card__content}>
							<div className={styles.bluePill}></div>
							<div className="flex justify-between w-full ">
								<div className="flex flex-col w-full">
									<motion.h1
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8 }}
									>
										Olah! Remco Stoeten here. <br />
										i'm a{' '}
										<span className="bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
											front-end
										</span>{' '}
										developer
										<br />
										based in
										<span className="bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
											{' '}
											the Netherlands
										</span>
										.
									</motion.h1>
								</div>

								{/* Phone goe here */}
								<div className="relative">
									<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
										<Image
											src="/pause.png"
											alt="Pause"
											className={styles.pause}
											width={100}
											height={100}
										/>
									</Tilt>
									<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
										<img
											className={styles.phone}
											src="/phone.png"
											alt="Phone image"
										/>
									</Tilt>
								</div>
							</div>
						</div>
						<div className={styles.bottom}>
							<div className={styles.cube}></div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.donut}></div>
			</div>
		</>
	);
}
