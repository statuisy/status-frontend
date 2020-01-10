import React from 'react';

const DueIn = (props ) => {
	const now = new Date();
	const createdAt = new Date(props.createdAt);

	//Set the due to a date object that is the how_long time added to the time it was created
	const due = new Date(Date.parse(createdAt) + props.howLong);

	//If Maintentance is completed return blank
	if(props.status === 'completed'){
		return (<></>)
	}
	function timeConversion(millisec) {

        	var seconds = (millisec / 1000).toFixed(1);

        	var minutes = (millisec / (1000 * 60)).toFixed(1);

        	var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        	var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        	if (seconds < 60) {
        	    return seconds + " Sec";
        	} else if (minutes < 60) {
        	    return minutes + " Min";
        	} else if (hours < 24) {
        	    return hours + " Hrs";
        	} else {
        	    return days + " Days"
        	}
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
