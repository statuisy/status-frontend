import React from 'react';

import data from '../data/maintenance.json';

const Maintenance = () => {
	console.log(data);
	return (
		<div>
			{data.map((item) => {
				return (
					<div className='maintenance-item' key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Maintenance;
