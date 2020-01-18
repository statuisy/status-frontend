import React from 'react';
import Head from 'next/head';
import data from '../data/maintenance.json';
import { useRouter } from 'next/router';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const MaintenancePage = props => {
	//Get ID from query string using next/router
	const router = useRouter();
	const id = parseInt(router.query.eid);
	//console.log(id);

	//Find the entry from data by ID
	const entry = data.find(item => item.id === id);
	//console.log(entry);

	 function timeConversion(millisec) {

                var seconds = (millisec / 1000).toFixed(1);

                var minutes = (millisec / (1000 * 60)).toFixed(1);

                var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

                var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

                if (seconds < 60) {
                    return seconds + " Sec";
                } else if (minutes < 60) {
                    return minutes + " Min";
                } else if (hours < 24) {
                    return hours + " Hrs";
                } else {
                    return days + " Days"
                }
        }

	function prettyDate(dateAsString) {
		const date = new Date(dateAsString);
		console.log(date);

		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return (
			days[date.getDay()] + ' ' + 
			date.getDate() + ' ' + 
			months[date.getMonth()] + ' ' + 
			date.getFullYear() + 
			' at ' + 
			date.getHours() + 
			':' + 
			(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMintues())
		);

	}

	 
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
