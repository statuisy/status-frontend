
const timeConversion = (millisec) => {
	

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

function prettyDate(dateAsString) {
                const date = new Date(dateAsString);
                console.log(date);

                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return (
                        days[date.getDay()] + ' ' +
                        date.getDate() + ' ' +
                        months[date.getMonth()] + ' ' +
                        date.getFullYear() +
                        ' at ' +
                        date.getHours() +
                        ':' +
                        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMintues())
                );

        }

export { timeConversion };
export { prettyDate };
