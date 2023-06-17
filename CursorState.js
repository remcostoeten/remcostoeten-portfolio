import React, { useState } from 'react';
import CursorPointer from './CursorPointer';

const App = () => {
	const [hideHand, setHideHand] = useState(false);

	const handleMouseEnter = () => {
		setHideHand(true);
	};

	const handleMouseLeave = () => {
		setHideHand(false);
	};

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<h1>Hover over this area to hide the hand:</h1>
			<CursorPointer hideHand={hideHand} />
		</div>
	);
};

export default App;
