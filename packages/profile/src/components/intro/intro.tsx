/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './intro.scss';


export const Intro:React.FC = () => (
  <section className="intro">
    <img src="./react_hooks_2.png" alt="React hooks" />
    <section className="text">
      <p>
        I am a front end engineer with experstise on Javascript frameworks.
        My experience spans React, Angular, Ember, VanillaJS. Been a while i have worked
        on React, so started this as a pet project to learn React hooks.
      </p>
      <p>
        <ul>
          <li>1. Font used is Trochhi</li>
          <li>2. Used Context to pass the navlinks in min componnets and use them in Layout componnets</li>
          <li>3. Used React router to navigate through links</li>
        </ul>
      </p>
    </section>
    <img src="./react_hooks_3.png" alt="React hooks" />
  </section>

);
