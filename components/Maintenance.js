import React from 'react';
import DueIn from './DueIn';
import Link from 'next/link';

import data from '../data/maintenance.json';

const Maintenance = () => {

	return (
		<div className="container">
			<label>Maintenance</label>
			{data.map((item) => {
				return (
					<Link href={`/maintenance?eid=${item.id}`} key={item.id} >
						<div className="alert alert-primary">
							<p>{item.title}</p>
							<p>{item.description}</p>
							<DueIn 
								howLong={item.how_long} 
								createdAt={item.created_at} 
								status={item.status} 
							/>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Maintenance;
