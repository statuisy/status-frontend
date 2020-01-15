import React from 'react';
import DueIn from './DueIn';

import data from '../data/incidents.json';

const Incidents = () => {
    return (
        <div className="container">
            <label>Incidents</label>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="alert alert-danger">
                            {item.title} <br />
                            {item.start_time}<br />
                            {item.status}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Incidents;