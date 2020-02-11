
import React from 'react';
import './navbar.scss';


export interface IListItem {
	listItemName: string;

}

export interface INavbarprops {
	listItems: IListItem[];
}

export const Navbar= (props:INavbarprops)=>{

	const buildNavList = ()=>{
		return props!.listItems.map((listItem)=>
		{
		 return	<li className="list-item">{listItem.listItemName}</li>
		});
	}

return (
	props.listItems && props.listItems.length > 0 ? 
		(<ul className="nav-list">
		{buildNavList()}
		</ul>) : <div> No Items found</div>

	)
}

