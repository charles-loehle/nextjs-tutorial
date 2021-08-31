import Layout from '../components/Layout';
import '../styles/globals.css';

// wrap all the components in Layout, which also contains Navbar and Footer
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
