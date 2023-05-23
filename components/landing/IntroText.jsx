import { useState } from 'react';
import styles from './Landing.module.scss';
import CursorPointer from 'components/Cursor';

export default function IntroText() {
	const [mouseSize, setMouseSize] = useState(25);

	const circleStyle = {
		borderRadius: '50%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-185%, -46%)',
		textAlign: 'right',
		mixblendmode: 'difference',
	};

	return (
		<>
			<CursorPointer size={mouseSize} />
			<div className="intro">
				<div className={styles.cube}></div>
				<div className={styles.intro} style={circleStyle}>
					<h1
						className="text-white animate__animated animate__zoomInRight animate__delay-1s"
						onMouseEnter={() => {
							setMouseSize(155);
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						Hello.
						<div className="w-36 h-36 absolute p-4 m-4 left-32 bg-indigo-400   flex "></div>
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
