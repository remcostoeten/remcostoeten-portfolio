import { useState } from 'react';
import 'animate.css';
import styles from './Landing.module.scss';
import CursorPointer from 'components/Cursor';

export default function IntroText() {
	const [mouseSize, setMouseSize] = useState(25);
	const [mouseText, setMouseText] = useState('');
	const circleStyle = {
		borderRadius: '50%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-155%, -46%)',
		textAlign: 'right',
	};

	return (
		<div style={{ cursor: 'none' }}>
			<h1
				onMouseEnter={() => {
					setMouseSize(75);
					setMouseText('HOVER');
				}}
				onMouseLeave={() => {
					setMouseSize(25);
					setMouseText('');
				}}
			>
				Cursor Follower Demo
			</h1>
			<div className={styles.cube}></div>
			<div classnName="intro" style={circleStyle}>
				<h1 className="text-white text-hero leading-hero  animate__animated animate__zoomInRight animate__delay-1s mb-4">
					Hello.
				</h1>
				<h2
					className="text-white text-32
 grow				 animate__animated animate__zoomInRight animate__delay-1250ms"
				>
					My name is Remco Stoeten
				</h2>
				<p className="text-white  text-32 animate__animated animate__zoomInRight animate__delay-1500ms">
					I'm a front-end developer from the Netherlands. <br /> Or as
					we call it in Dutch: <i>divjesschuiver</i>.
				</p>
			</div>
		</div>
	);
}
