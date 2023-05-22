// components/cursor.js

import React from 'react';
import Cursor from 'react-cursor-follow';

const CursorPointer = ({ text, size = 25, color = 'white' }) => {
	return (
		<Cursor duration={0.8} size={size} color={color} className="cursor">
			<p
				style={{
					width: '100%',
					height: '100%',
					fontSize: '8px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: 0,
					padding: 0,
					color: 'black',
				}}
			>
				{text}
			</p>
		</Cursor>
	);
};

export default CursorPointer;
