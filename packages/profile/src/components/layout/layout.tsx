import React from 'react';
import './layout.scss';
import { Navbar } from './../navbar/navbar';
import { TimeNow } from './../time/time';
import { Intro } from './../intro/intro';



function Layout() {

const listItemsRef = [
                    {'listItemName': 'PROFILE'},
                    {'listItemName': 'CAREER'},
                    {'listItemName': 'PROJECTS'},
                    {'listItemName': 'HOBBIES'},
                    {'listItemName': 'CONTACT'}
                 ];

  return (
    <div className="layout">
      <header className="header">
        <TimeNow/>
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
    </div>
  );
}

export default Layout;
