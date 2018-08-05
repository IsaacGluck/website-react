import React, { Component } from 'react';
import { Link } from 'react-scroll';
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
          <Link to="home" smooth>
            <span className="navLink">
Home
            </span>
          </Link>
          <Link to="about" offset={-50} smooth>
            <span className="navLink">
About
            </span>
          </Link>
          <Link to="experience" offset={-50} smooth>
            <span className="navLink">
Experience
            </span>
          </Link>
          <Link to="portfolio" offset={-50} smooth>
            <span className="navLink">
Portfolio
            </span>
          </Link>
          <Link to="contact" smooth>
            <span className="navLink">
Contact
            </span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
