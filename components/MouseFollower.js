import { useState, useEffect, useRef } from 'react';

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
		window.addEventListener('mousemove', onMouseMove);
	}, [growEl]);

	const circleSize = isTouching ? 75 : 15;

	const circleStyle = {
		left: `${pos.x - circleSize / 2}px`,
		top: `${pos.y - circleSize / 2}px`,
		width: `${circleSize}px`,
		height: `${circleSize}px`,
		transition:
			'width 333ms ease-out, height 333ms ease-out cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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

	return <div ref={circleRef} className="circle" style={circleStyle} />;
}
