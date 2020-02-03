import React from 'react';
import DueIn from './DueIn';
import Link from 'next/link';

import data from '../data/incidents.json';

const Incidents = () => {
    return (
        <div className="container">
            <label>Incidents</label>
            {data.map((item) => {
                return (
                    <Link href={`/incidents?eid=${item.id}`}>
                        <div key={item.id}>
                            <div className="alert alert-danger">
                                <p>{item.title}</p>
                                <p>{item.start_time}</p>
                                <p>{item.status}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Incidents;
