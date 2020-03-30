
import React from 'react';
import {Slider} from './../slider/slider'; 


import './profile.scss';


export const Profile= ()=>{

	
return (
	<div className= "profile-section">
		<div className = "icons">
			<div className = "combo">
				<img className = "icon" alt = "javascipt-logo" src="./js.png"/>
				<Slider type='pro'/>
			</div>
			<div className = "combo">
				<img className = "icon" alt = "angular-logo" src="./angular-icon.svg"/>
				<Slider type='avg'/>
			</div>
			<div className = "combo">
				<img className = "icon" alt = "react-logo" src="./logo512.png"/>
				<Slider type='avg'/>
			</div>
			<div className = "combo">
				<img className = "icon" alt = "css-logo" src="./css.png"/>
				<Slider type='avg'/>
			</div>
			<div className = "combo">
				<img className = "icon" alt = "html-logo" src="./html5.svg"/>
				<Slider type='avg'/>
			</div>
			<div className = "combo">
				<img className = "icon" alt = "es6-logo" src="./es6.png"/>
				<Slider type='avg'/>
			</div>
			
		</div>

	</div>
	)
}

// <img className = "icon left-rotate" src="./html5.svg"/>
		
// 			<img className = "icon right-rotate" src="./node.png"/>
// 			<img className = "icon left-rotate" src="./js.png"/>
// 			<img className = "icon right-rotate" src="./github.png"/>


// <table>
// 			<thead>
// 				<tr>
// 					<td>CATEGORY</td>
// 					<td>SKILLS</td>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr>
// 					<td>Languages</td>
// 					<td>JavaScript, Java</td>
// 				</tr>
// 				<tr>
// 					<td>Frameworks</td>
// 					<td>Angular, React</td>
// 				</tr>
// 			</tbody>


// 		</table>
