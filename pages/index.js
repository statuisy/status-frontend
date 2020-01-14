
import Maintenance from '../components/Maintenance';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

const Index = () => (
	<>
		<Head>
			<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
		</Head>

		<div className="container-fluid">
			<Header />
			<Maintenance />
			<Services />
			<Footer />
		</div>
	</>
)

export default Index;
