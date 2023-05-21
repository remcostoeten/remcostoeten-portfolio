import '../styles/styles.scss';
import MouseFollower from 'components/MouseFollower';

function app({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<MouseFollower />
		</>
	);
}

export default app;
