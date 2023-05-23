import { useEffect } from 'react';
import styles from './Landing.module.scss';

export default function GradientCircle() {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
	}, []);

	return (
		<div
			className={`inner-circle ${styles.GradientCircle} ${styles.centered}`}
		></div>
	);
}
