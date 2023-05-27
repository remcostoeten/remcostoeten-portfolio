import { useState } from 'react';
import '../styles/styles.scss';
import CursorPointer from 'components/Cursor';
import ThemeSwitcher from 'components/header/ThemeSwitcher';
import TopNotice from 'components/TopNotice';

function app({ Component, pageProps }) {
	const [mouseSize, setMouseSize] = useState(25);

	return (
		<>
			<TopNotice />
			<Component {...pageProps} />
		</>
	);
}

export default app;
