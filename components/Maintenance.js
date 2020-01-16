import React from 'react';
import DueIn from './DueIn';

import data from '../data/maintenance.json';

const Maintenance = () => {
	return (
		<div className="container">
			<label>Maintenance</label>
			{data.map((item) => {
				return (
					<div key={item.id}>
						<div className="alert alert-primary">
							{item.title}<br />
							{item.description}<br />
							<DueIn howLong={item.how_long} createdAt={item.created_at} status={item.status} />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Maintenance;
