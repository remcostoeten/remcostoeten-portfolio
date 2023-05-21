import React from 'react';
import styles from './Landing.module.scss';
const GradientSphere = ({ size }) => {
	const circleStyle = {
		width: size,
		height: size,
		borderRadius: '50%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundImage:
			'linear-gradient(43deg, #000 0%, #c850c0 60%, #ffcc70 100%)',
	};

	return <div style={circleStyle}></div>;
};

export default GradientSphere;
