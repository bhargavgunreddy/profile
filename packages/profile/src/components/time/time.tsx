import React from 'react';
import './time.scss';

export const TimeNow:React.FC = ()=>{

	const dateNow = ()=>{
		return Date();
	}

	return (
		<div>
			Time now: {dateNow()}
		</div>
		)
}