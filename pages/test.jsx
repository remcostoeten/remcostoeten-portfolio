import { useState } from 'react';
import CursorPointer from 'components/Cursor';

export default function Index() {
	const [mouseSize, setMouseSize] = useState(25);

	return (
		<>
			<div className="cursor-page">
				<h1
				className='text-hero'
					onMouseEnter={() => {
						setMouseSize(155);
					}}
					onMouseLeave={() => {
						setMouseSize(25);
					}}
				>
Hover me for weeee				</h1>
				<button
					style={{ cursor: 'pointer' }}
					className="link"
					onClick={() => alert('pooka')}
					onMouseEnter={() => {
						setMouseSize(45);
					}}
					onMouseLeave={() => {
						setMouseSize(25);
					}}
				>
					JAFFA
				</button>
				<CursorPointer size={mouseSize} />
			</div>
		</>
	);
}
