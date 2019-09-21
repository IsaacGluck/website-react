import React, { Component } from 'react';
import Github from '../img/Github';
import Linkedin from '../img/Linkedin';
import Instagram from '../img/Instagram';
import '../styles/App.css';

class FooterSection extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="footerSocialMedia">
          <a href="https://github.com/IsaacGluck" target="_blank" rel="noreferrer noopener">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/isaacgluck/" target="_blank" rel="noreferrer noopener">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/isaacgluck_official/" target="_blank" rel="noreferrer noopener">
            <Instagram />
          </a>
        </div>
        <div className="FooterCopyright">
          © 2019 Isaac Gluck
        </div>
      </div>
    );
  }
}

export default FooterSection;
