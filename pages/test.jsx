import { useState } from 'react';
import CursorPointer from 'components/Cursor';
export default function Index() {
	const [mouseSize, setMouseSize] = useState(25);
	const [mouseText, setMouseText] = useState('');

	return (
		<>
			<div className="cursor-page" style={{ cursor: 'none' }}>
				<h1
					onMouseEnter={() => {
						setMouseSize(75);
						setMouseText('HOVER');
					}}
					onMouseLeave={() => {
						setMouseSize(25);
						setMouseText('aaaaa');
					}}
				>
					Cursor Follower Demo
				</h1>
				<div className="rounded-full w-46  h-46 p-4 bg-white mix-blend-exclusion absolute right-16"></div>
				<div className="w-46  h-46 p-4 bg-white mix-blend-difference absolute right-32"></div>

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
						setMouseText('aaaaaa');
					}}
				>
					JAFFA
				</button>
				<CursorPointer text={mouseText} size={mouseSize} />
			</div>
		</>
	);
}
