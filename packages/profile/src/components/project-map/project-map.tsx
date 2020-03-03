
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
				<b> Client Exchange </b>
				<li> Secure mailbox for clients of JpMorgan</li>
				<li> Access to JpMorgan account holders only</li>
				<li> Avoid redirection to third party sites to complete signature </li>
				<li> Features like adding favorite users, templates, user signatures to ressemble outlook</li>
				<pre> Angular, JS, CSS</pre>

			</ul>	
		</div>
		<div className="project-section align-right">
			<ul className="">
				<b> Garuda </b>
				<li> Rich dashboard with multiple charts to depict the account balances</li>
				<li> Used d3 js to create these charts</li>
				<li> Avoid redirection to third party sites to complete signature </li>
				 <pre> Ember JS, d3, JS, SCSS, HTML</pre>

			</ul>
		</div>
		<div className="project-section align-left">
			<ul className="">
				<b> A&E Networks </b>
				<li> Application for internal employees of A&E</li>
				<li> Portal to filter out/add content to the library</li>
				<pre>Backbone JS, JS, CSS, HTML</pre>
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

