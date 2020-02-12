import React , { createContext }from 'react';
import './layout.scss';
import { Navbar } from './../navbar/navbar';
import { TimeNow } from './../time/time';
import { Intro } from './../intro/intro';

 const ThemeContext = createContext({  });



function Layout() {
  const timeLabel ="Time now:";
const listItemsRef = [
                    {'listItemName': 'PROFILE'},
                    {'listItemName': 'CAREER'},
                    {'listItemName': 'PROJECTS'},
                    {'listItemName': 'HOBBIES'},
                    {'listItemName': 'CONTACT'}
                 ];

  return (
    <div className="layout">
    <ThemeContext.Provider value={timeLabel}>
      <header className="header">
        <TimeNow />
      </header>
      <section className="main-content">

        <Navbar listItems = {listItemsRef}/>
        <div className="carousel">
          <img className= "image" src="./mypic.jpg" alt="Image to display"></img>
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
