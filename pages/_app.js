import '../styles/styles.scss';
import MouseFollower from 'components/Ball';

function app({ Component, pageProps }) {
	return (
		<>
			<MouseFollower />
			<Component {...pageProps} />
		</>
	);
}

export default app;
