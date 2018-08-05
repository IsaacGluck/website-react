import React, { Component } from 'react';
import '../styles/App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 300;
      if (top !== this.state.top) {
        this.setState({ top });
      }
    });
  }

  render() {
    return (
      <nav className={this.state.top ? 'navTop' : 'navBottom'}>
        <div className="navHeaderWrapper">
          <span className={this.state.top ? 'navHeaderTop' : 'navHeaderBottom'}>
Isaac Gluck
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
