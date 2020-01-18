import React from 'react';
import Head from 'next/head';
import data from '../data/maintenance.json';
import { useRouter } from 'next/router';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { timeConversion, prettyDate } from '../components/Utils';

const MaintenancePage = props => {
	//Get ID from query string using next/router
	const router = useRouter();
	const id = parseInt(router.query.eid);
	//console.log(id);

	//Find the entry from data by ID
	const entry = data.find(item => item.id === id);
	//console.log(entry);

	 
	return (
		<>
		<Head>
		<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
			</Head>
		<PageHeader />
		<div className="container">
			<h1>{entry.title}</h1>
			<p className="text-muted">Scheduled on {prettyDate(entry.start_time)}</p>
			<p className="font-weight-bold">Schedule/Description of work</p>
			<p>{entry.description}</p>
			<dl className="row">
				<dt className="col-sm-3">Scheduled start time</dt>
				<dd className="col-sm-9">{entry.start_time}</dd>
				
				<dt className="col-sm-3">Duration</dt>
				<dd className="col-sm-9">{timeConversion(entry.how_long)}</dd>
				
				<dt className="col-sm-3">Status</dt>
				<dd className="col-sm-9">{entry.status}</dd>
			</dl>
		</div>
		<Footer />
		</>
	)
}

export default MaintenancePage;
