import React from 'react';

import DueIn from './DueIn';

import data from '../data/maintenance.json';

const Maintenance = () => {
	return (
		<div>
			{data.map((item) => {
				return (
					<div className='maintenance-item' key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<DueIn howLong={item.how_long} createdAt = {item.created_at} status={item.status} />
					</div>
				)
			})}
		</div>
	)
}

export default Maintenance;
