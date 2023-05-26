import { useState } from 'react';
import styles from './Landing.module.scss';
import CursorPointer from 'components/Cursor';

export default function IntroText() {
	const [mouseSize, setMouseSize] = useState(25);

	const circleStyle = {
		borderRadius: '50%',
		position: 'absolute',
		top: '50%',
		right: '-25%',
		transform: 'translate(0, 0)',
		mixblendmode: 'difference',
	};

	return (
		<>
			<CursorPointer size={mouseSize} />
			<div
				className="
			"
			>
				<div className={styles.cube}></div>
				<div className={styles.intro} style={circleStyle}>
					<h1
						className="text-white animate__animated animate__zoomInLeft animate__delay-1s"
						onMouseEnter={() => {
							setMouseSize(155);
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						Hello.
					</h1>
					<h2
						className="text-white 
  animate__animated animate__zoomInRight animate__delay-1250ms text-34"
					>
						My name is Remco Stoeten
					</h2>
					<p className="text-white  text-32 animate__animated animate__zoomInRight animate__delay-1500ms">
						I'm a front-end developer from the Netherlands. <br />{' '}
						Or as we call it in Dutch: <i>divjesschuiver</i>.
					</p>
				</div>
			</div>
		</>
	);
}
