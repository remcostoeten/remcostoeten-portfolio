import { useState } from 'react';
import '../styles/styles.scss';
import CursorPointer from 'components/Cursor';
import ThemeSwitcher from 'components/header/ThemeSwitcher';

function app({ Component, pageProps }) {
	const [mouseSize, setMouseSize] = useState(25);

	return (
		<>
			<ThemeSwitcher />
			<Component {...pageProps} />
		</>
	);
}

export default app;
