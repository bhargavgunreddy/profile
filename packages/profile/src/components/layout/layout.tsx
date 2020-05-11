/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useContext } from 'react';
import './layout.scss';
import { Route } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';

import { Intro } from '../intro/intro';
import { ListContext } from '../main/main';
import { Carousel } from '../carousel/carousel';
import { Profile } from '../profile/profile';
import { ProjectMap } from '../project-map/project-map';
// import {ContextSwitch} from './../theme-switcher/theme-switch';


const ThemeContext = createContext({ });


function Layout() {
  const timeLabel = 'Time now:';

  const list:any = useContext(ListContext);


  return (
    <div className="layout">
      <ThemeContext.Provider value={timeLabel}>

        <section className="main-content">
          <Navbar listItems={list.listItemsRef} />

          <div className="content-space">
            <Route path="/CAREER" component={Carousel} />
            <Route path="/HOBBIES" component={Intro} />
            <Route path="/PROFILE" component={Profile} />
            <Route path="/PROJECTS" component={ProjectMap} />

          </div>

        </section>
        <footer className="footer">
          Footer
        </footer>
      </ThemeContext.Provider>
    </div>
  );
}


export { Layout, ThemeContext };
