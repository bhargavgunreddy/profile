import React, {createContext} from 'react';	
import {BrowserRouter	, Switch} from 'react-router-dom';


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