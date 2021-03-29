import '../styles/globals.css';

interface MyAppProps {
	Component: (props: Record<string, unknown>) => JSX.Element;
	pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default MyApp;
