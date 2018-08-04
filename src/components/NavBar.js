import React, { Component } from 'react';
import '../styles/App.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navWrapper">
        <div className="navHeaderWrapper">
          <span className="navHeader">
IG
          </span>
        </div>
        <div className="navLinksWrapper">
          <span className="navLink">
Home
          </span>
          <span className="navLink">
About
          </span>
          <span className="navLink">
Experience
          </span>
          <span className="navLink">
Portfolio
          </span>
          <span className="navLink">
Contact
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
