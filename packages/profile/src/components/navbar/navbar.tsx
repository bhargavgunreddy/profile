
import React, {useContext, useEffect} from 'react';
import './navbar.scss';
import {ListContext} from './../main/main'

export interface IListItem {
	listItemName: string;

}

export interface INavbarprops {
	listItems: IListItem[];
}

export const Navbar= (props:any)=>{

	let items:any = useContext(ListContext);
	let looper:any = null;


// console.log(items);
 looper = props && props.listItems? props.listItems:items.listItemsRef;

	const buildNavList = ()=>{
		return looper.map((listItem:any)=>
		{
		 return	<li className="list-item">{listItem.listItemName}</li>
		});
	}


return (
	looper && looper.length > 0 ? 
		(
			<ul className="nav-list">
				{buildNavList()}
			</ul>
		) : <div> No Items found</div>

	)
}

