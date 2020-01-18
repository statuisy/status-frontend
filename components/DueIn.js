import React from 'react';
import { timeConversion } from './Utils';

const DueIn = (props ) => {
	const now = new Date();
	const createdAt = new Date(props.createdAt);

	//Set the due to a date object that is the how_long time added to the time it was created
	const due = new Date(Date.parse(createdAt) + props.howLong);

	//If Maintentance is completed return blank
	if(props.status === 'completed'){
		return (<></>)
	}

	if(now < due){
		return (
			<p>Due in {timeConversion(due-now)}</p>
		)
	}else{
		return (
			<>
				<p>Past due 😢 for {timeConversion(now-due)}</p>
			</>
		)
	}
}

export default DueIn;
