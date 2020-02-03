import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import data from '../data/incidents.json';

const IncidentsPage = props => {
    //Get ID from query string using next/router
    const router = useRouter();
    const id = parseInt(router.query.eid);

    //Find the entry from data by ID
    const entry = data.find(item => item.id === id);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Head>
            <PageHeader />
            <div className="container">
                <label>Incident</label>

                <div key={entry.id}>
                    <div className="alert">
                        <p className="text-primary text-danger">{entry.title}</p>
                        <p className="text-warning">{entry.start_time} - {entry.description}</p>
                        {/* <p className="text-warning">{entry.entries[1].text}</p> */}
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default IncidentsPage;
