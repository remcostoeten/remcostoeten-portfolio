import React, { useState } from 'react';
import { MouseSizeContext } from '@/lib/MouseSizeContext';

export function MouseSizeProvider({ children }) {
	const [mouseSize, setMouseSize] = useState(25);

	return (
		<MouseSizeContext.Provider value={{ mouseSize, setMouseSize }}>
			{children}
		</MouseSizeContext.Provider>
	);
}
