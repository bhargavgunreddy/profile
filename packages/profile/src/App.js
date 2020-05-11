/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Layout } from './components/layout/layout';
import './App.css';

function App() {
  const switchMode = (event) => {
    const rootDiv = document.getElementById('root');
    if (event.target && event.target.id === 'dark') {
      rootDiv.setAttribute('data-theme', 'dark');
    } else {
      rootDiv.setAttribute('data-theme', 'light');
    }
  };

  return (
    <>
      <div>
        <button id="dark" onClick={switchMode} className="mood-checker">DARK</button>
        <button id="light" onClick={switchMode} className="mood-checker">LIGHT</button>
      </div>
      <Layout />
    </>
  );
}


export default App;
