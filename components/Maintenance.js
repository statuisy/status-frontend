import React from 'react';
import styled from 'styled-components';
import DueIn from './DueIn';

import data from '../data/maintenance.json';

const MaintenanceItem = styled.div`
	background-color: #696969;
	color: white;
	border-radius: 15px;
	margin: 10px 50px; 
	padding: 30px;
	p {
		font-size: 1.5rem;
	}
	h2 {
		font-size: 2rem;

	}
	h2::after {
		content: 'Maintenance';
		float: right;
		font-size: 0.8rem;
		font-weight: lighter;
		}
`;
const Maintenance = () => {
	return (
		<div>
			{data.map((item) => {
				return (
					<MaintenanceItem key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<DueIn howLong={item.how_long} createdAt = {item.created_at} status={item.status} />
					</MaintenanceItem>
				)
			})}
		</div>
	)
}

export default Maintenance;
