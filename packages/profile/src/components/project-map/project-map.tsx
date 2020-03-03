
import React from 'react';
import './project-map.scss';


/*
	Project map consists of cards which describe individual projects i have worked on 
	it might have entensive data beneath each card so it can be collapsible/expandabale based on 
	the project size
*/

export const ProjectMap= ()=>{

	
return (
	<div className= "project-sections">
		<div className="project-section align-left">
			<ul className="">
				<li> Client Exchange</li>
				<li>Secure mailbox for cleints of JpMorgan</li>
				<li>Only jpmorgan accounts will have access</li>
				<li>Avoid redirection to third party sites to complete signature </li>
				<li>Features like adding favorite users, templates, user signatures to ressemble outlook</li>
			</ul>	
		</div>
		<div className="project-section no-border"></div>
		<div className="project-section align-right">
			<ul className="">
				<li> Client Exchange</li>
				<li>Secure mailbox for cleints of JpMorgan</li>
				<li>Only jpmorgan accounts will have access</li>
				<li>Avoid redirection to third party sites to complete signature </li>
				<li>Features like adding favorite users, templates, user signatures to ressemble outlook</li>
			</ul>
		</div>
		<div className="project-section align-left">
			<ul className="">
				<li> Client Exchange</li>
				<li>Secure mailbox for cleints of JpMorgan</li>
				<li>Only jpmorgan accounts will have access</li>
				<li>Avoid redirection to third party sites to complete signature </li>
				<li>Features like adding favorite users, templates, user signatures to ressemble outlook</li>
			</ul>
		</div>
		<div className="project-section align-right">
			<ul className="">
				<li> Client Exchange</li>
				<li>Secure mailbox for cleints of JpMorgan</li>
				<li>Only jpmorgan accounts will have access</li>
				<li>Avoid redirection to third party sites to complete signature </li>
				<li>Features like adding favorite users, templates, user signatures to ressemble outlook</li>
			</ul>
		</div>
	</div>	
	)
}

