
import React, {useContext} from 'react';
import {
  NavLink
} from "react-router-dom";
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
		return looper.map((listItem:any, index:number)=>
		{
			let refWord = listItem.listItemName;
		 return	<li className="list-item" key={'listItem-'+index}>
		 			<NavLink to={"/"+refWord}>{refWord}</NavLink>
	 			</li>
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

