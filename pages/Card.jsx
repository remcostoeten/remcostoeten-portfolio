import Header from 'components/header/Header';
import React, { useEffect } from 'react';
import styles from 'styles/components/Card.module.scss';

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
							<h1 className="">
								Olah! Remco here. <br />
								I'm a{' '}
								<span className=" bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
									Frontend Developer
								</span>{' '}
								<br />
								based in
								<span className="bg-gradient-to-r from-violet-500 to-pink-500">
									the Netherlands
								</span>
								.
							</h1>
						</div>
						<div className="card__bottom"></div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.donut}></div>
			</div>{' '}
		</>
	);
}
