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
          <Github />
          <Linkedin />
          <Instagram />
        </div>
        <div className="FooterCopyright">
© 2018 Isaac Gluck
        </div>
      </div>
    );
  }
}

export default FooterSection;
