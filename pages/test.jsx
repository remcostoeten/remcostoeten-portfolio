import { useEffect, useState } from 'react';
import CursorPointer from 'components/Cursor';
export default function Index() {
	const [mouseSize, setMouseSize] = useState(25);
	const [mouseText, setMouseText] = useState('');

	const handleHover = (hovered) => {
		setIsHovered(hovered);
	};

	useEffect(() => {
		document.body.classList.add('mouse');
	}, []);

	return (
		<>
			<div className="App" style={{ cursor: 'none' }}>
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
				<button
					style={{ cursor: 'pointer' }}
					className="link"
					onClick={() => alert('pooka')}
					onMouseEnter={() => {
						setMouseSize(45);
						setMouseText('CLICK');
					}}
					onMouseLeave={() => {
						setMouseSize(25);
						setMouseText('');
					}}
				>
					JAFFA
				</button>
				<CursorPointer text={mouseText} size={mouseSize} />
			</div>
		</>
	);
}
