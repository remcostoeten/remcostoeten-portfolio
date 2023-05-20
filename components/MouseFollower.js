import { useEffect, useState, useRef } from 'react';
import styles from './Circle.module.css';

export default function MouseFollower() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [isTouching, setIsTouching] = useState(false);
	const [growEl, setGrowEl] = useState(null);
	const circleRef = useRef(null);

	const hasParentWithClass = (element, className) => {
		const classList = className.split(' ');
		while (element) {
			if (
				element.classList &&
				classList.every((cls) => element.classList.contains(cls))
			) {
				return true;
			}
			element = element.parentElement;
		}
		return false;
	};

	const onMouseMove = (e) => {
		setPos({ x: e.clientX, y: e.clientY });
		const el = e.target;

		if (el && hasParentWithClass(el, 'grow')) {
			setIsTouching(true);
			setGrowEl(el);
		} else {
			setIsTouching(false);
			setGrowEl(null);
		}
	};

	useEffect(() => {
		const debouncedMouseMove = debounce(onMouseMove, 16); // Adjust the delay as needed (e.g., 16ms for 60fps)

		window.addEventListener('mousemove', debouncedMouseMove);

		return () => {
			window.removeEventListener('mousemove', debouncedMouseMove);
			if (growEl) {
				growEl.classList.remove('mix-blend-overlay');
			}
		};
	}, [growEl]);

	const circleSize = isTouching ? 150 : 15;

	const circleStyle = {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
		width: `${circleSize}px`,
		height: `${circleSize}px`,
	};

	useEffect(() => {
		if (growEl) {
			growEl.classList.add('mix-blend-overlay');
		}

		return () => {
			if (growEl) {
				growEl.classList.remove('mix-blend-overlay');
			}
		};
	}, [growEl]);

	return (
		<div ref={circleRef} className={styles.circle} style={circleStyle} />
	);
}

// Debounce function to limit the rate of function calls
function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}
