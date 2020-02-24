import React, {createContext} from 'react';	
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {WeatherComp} from './../weather/weather';
import {Navbar} from './../navbar/navbar';


import App from './../../App';

export const ListContext = createContext({});

let valueList = {'listItemsRef' : [
                    {'listItemName': 'PROFILE'},
                    {'listItemName': 'CAREER'},
                    {'listItemName': 'PROJECTS'},
                    {'listItemName': 'HOBBIES'},
                    ]}

export const Main = () => {



	return (
		<BrowserRouter>
  
		<Switch>
		<ListContext.Provider value={valueList}>
			<App/>
		</ListContext.Provider>
		</Switch>
		</BrowserRouter>
		)
}