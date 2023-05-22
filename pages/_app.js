import { useState } from 'react';
import '../styles/styles.scss';
import CursorPointer from 'components/Cursor';

function app({ Component, pageProps }) {
	const [mouseSize, setMouseSize] = useState(25);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default app;
