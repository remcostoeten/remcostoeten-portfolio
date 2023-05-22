import React from 'react';
import styles from './Landing.module.scss';

const GradientSphere = ({ size, top, left, rotate, horizontalTransform }) => {
	const circleStyle = {
		width: size,
		height: size,
		borderRadius: '50%',
		position: 'absolute',
		top: top,
		left: left,
		transform: `rotate(${rotate}deg) ${horizontalTransform} translate(-50%, -50%)`,
		backgroundImage:
			'linear-gradient(43deg, #000 0%, #c850c0 60%, #ffcc70 100%)',
	};

	return <div className={styles.sphere} style={circleStyle}></div>;
};

export default GradientSphere;
