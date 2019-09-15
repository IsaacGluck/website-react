import React, { Component } from 'react';
import { Link } from 'react-scroll';
import HamburgerMenu from 'react-hamburger-menu';
import '../styles/App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
      hamburgerOpen: false,
    };

    this.onHamburgerClicked = this.onHamburgerClicked.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 300;
      if (top !== this.state.top) {
        this.setState({ top });
      }
    });
  }

  onHamburgerClicked() {
    this.setState((prevState) => (
      { hamburgerOpen: !prevState.hamburgerOpen }));
  }

  render() {
    return (
      <nav className={this.state.top ? 'navTop' : 'navBottom'}>
        <div className="navHeaderWrapper">
          <span className={this.state.top ? 'navHeaderTop' : 'navHeaderBottom'}>
Isaac Gluck
          </span>
          <HamburgerMenu className="hamburger" isOpen={this.state.hamburgerOpen} menuClicked={this.onHamburgerClicked} />
        </div>
        <div className={this.state.hamburgerOpen ? 'navLinksWrapper' : 'hideNavLinksWrapper'}>
          <Link to="home" smooth onClick={this.onHamburgerClicked}>
            <span className="navLink">
Home
            </span>
          </Link>
          <Link to="about" offset={-70} smooth onClick={this.onHamburgerClicked}>
            <span className="navLink">
About
            </span>
          </Link>
          <Link to="experience" offset={-70} smooth onClick={this.onHamburgerClicked}>
            <span className="navLink">
Experience
            </span>
          </Link>
          <Link to="portfolio" offset={-70} smooth onClick={this.onHamburgerClicked}>
            <span className="navLink">
Portfolio
            </span>
          </Link>
          <Link to="contact" smooth onClick={this.onHamburgerClicked}>
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
