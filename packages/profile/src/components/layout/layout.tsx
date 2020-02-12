import React , { createContext , useContext}from 'react';
import './layout.scss';
import { Navbar,INavbarprops } from './../navbar/navbar';
import { Intro } from './../intro/intro';
import {WeatherComp} from './../weather/weather';
import {ListContext} from './../main/main';



 const ThemeContext = createContext({  });




function Layout() {
  const timeLabel ="Time now:";

let list:any = useContext(ListContext);
console.log(list);


  return (
    <div className="layout">
    <ThemeContext.Provider value={timeLabel}>
      <header className="header">
      <WeatherComp/>
      </header>
      <section className="main-content">

        <Navbar listItems = {list.listItemsRef}/>
        <div className="carousel">
          <img className= "image" src="./mypic.jpg" alt=" my display"></img>
        </div>
       <Intro/>

      </section>
      <footer className="footer">
        Footer
      </footer>
    </ThemeContext.Provider>
    </div>
  );
}



export { Layout, ThemeContext};
