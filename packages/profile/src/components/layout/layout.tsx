import React , { createContext , useContext}from 'react';
import './layout.scss';
import { Navbar,INavbarprops } from './../navbar/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Intro } from './../intro/intro';
import {WeatherComp} from './../weather/weather';
import {ListContext} from './../main/main';
import {Carousel} from './../carousel/carousel';
import {Profile} from './../profile/profile';
import {Project} from './../project/project';


 const ThemeContext = createContext({  });




function Layout() {
  const timeLabel ="Time now:";

let list:any = useContext(ListContext);


  return (
    <div className="layout">
    <ThemeContext.Provider value={timeLabel}>
      <header className="header">
      <WeatherComp/>
      </header>
      <section className="main-content">

        <Navbar listItems = {list.listItemsRef}/>
     
       <div className="content-space">
           <Route path="/CAREER" component={Carousel}/>
            <Route path="/HOBBIES" component={Intro}/>
            <Route path="/PROFILE" component={Profile}/>
            <Route path="/PROJECTS" component={Project}/>

       </div>

      </section>
      <footer className="footer">
        Footer
      </footer>
    </ThemeContext.Provider>
    </div>
  );
}



export { Layout, ThemeContext};
