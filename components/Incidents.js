import React from 'react';
import styled from 'styled-components';
import DueIn from './DueIn';

import data from '../data/incidents.json';

const Incidents = () => {
    return (
        <div className="container">
            <label>Incidents</label>
            {data.map((item) => {
                return (
                    <div className="alert alert-danger">
                        {item.title} <br />
                        {item.start_time}<br />
                        {item.status}
                    </div>

                )
            })}
        </div>
    )
}

export default Incidents;