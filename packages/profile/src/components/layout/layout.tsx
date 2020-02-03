import React from 'react';
import './layout.scss';

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        Time now 67:23
      </header>
      <section className="main-content">
        <nav className="navigation">
          <a>First</a>
          <a>Second</a>
          <a>Third</a>
          <a>Fourth</a>
          <a>Fifth</a>
        </nav>
        <div className="carousel">
          <img alt="Image to display"></img>
        </div>
        <section className="intro">
          INtro
        </section>

      </section>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default Layout;
