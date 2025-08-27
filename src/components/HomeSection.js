import React, { Component } from 'react';
import '../styles/App.scss';

class HomeSection extends Component {
  render() {
    return (
      <div className="homeSection" id="home">
        <div className="homeSectionText">
          <span className="homeSectionName">Isaac Gluck</span>
          <span className="homeSectionSchool">Engineer at Yotta</span>
        </div>
      </div>
    );
  }
}

export default HomeSection;
