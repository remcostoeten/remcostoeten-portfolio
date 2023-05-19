import { useEffect, useState } from 'react';

export default function Ball() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [size, setSize] = useState(10);
	const [hovering, setHovering] = useState(false);

	useEffect(() => {
		const moveBall = (e) => {
			setPos({ x: e.clientX, y: e.clientY });

			const element = document.elementFromPoint(e.clientX, e.clientY);

			if (element && element.classList.contains('grow')) {
				setHovering(true);
			} else {
				setHovering(false);
			}
		};

		window.addEventListener('mousemove', moveBall);

		return () => {
			window.removeEventListener('mousemove', moveBall);
		};
	}, []);

	useEffect(() => {
		if (hovering) {
			setSize((size) => (size < 100 ? size + 2 : 100));
		} else {
			setSize((size) => (size > 10 ? size - 2 : 10));
		}
	}, [hovering]);

	return (
		<div
			className="absolute bg-red-500 rounded-full transition-all duration-500 ease-in-out"
			style={{
				width: `${size}px`,
				height: `${size}px`,
				transform: `translate3d(${pos.x - size / 2}px, ${
					pos.y - size / 2
				}px, 0)`,
			}}
		/>
	);
}
