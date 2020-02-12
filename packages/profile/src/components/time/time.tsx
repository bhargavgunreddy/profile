import React, { useContext } from 'react';
import './time.scss';
import {ThemeContext} from './../layout/layout'

export const TimeNow:React.FC = ()=>{

	const dateNow = ()=>{
		return Date();
	}

	const themeLabel = useContext(ThemeContext);

	return (
		<div>
			{themeLabel}{dateNow()}
		</div>
		)
}