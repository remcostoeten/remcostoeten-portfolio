import { useState } from 'react';
import '../styles/styles.scss';
import ThemeSwitcher from 'components/header/ThemeSwitcher';

function app({ Component, pageProps }) {
	const [mouseSize, setMouseSize] = useState(25);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let mounted = true;

		if (typeof window !== 'undefined') {
			const visitedBefore = localStorage.getItem('visitedBefore');

			if (!visitedBefore && mounted) {
				localStorage.setItem('visitedBefore', 'false');
			}

			setTimeout(() => {
				setIsLoading(false);
			}, 3500);
		}

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<>
			<div
				className={`roboto content-wrapper ${
					isLoading ? 'loading' : ''
				}`}
			></div>{' '}
			<ThemeSwitcher />
			<Component {...pageProps} />
		</>
	);
}

export default app;
