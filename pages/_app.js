import '../styles/styles.scss';
import MouseFollower from 'components/MouseFollower';

function app({ Component, pageProps }) {
	return (
		<>
				<MouseFollower />
			<Component {...pageProps} />
		</>
	);
}

export default app;
