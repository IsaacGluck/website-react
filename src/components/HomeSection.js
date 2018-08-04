import React, { Component } from 'react';
import '../styles/App.css';

class HomeSection extends Component {
  render() {
    return (
      <div className="homeSection">
        <div className="homeSectionText">
          <span className="homeSectionName">
Isaac Gluck
          </span>
          <span className="homeSectionSchool">
Dartmouth &apos;19
          </span>
        </div>
      </div>
    );
  }
}

export default HomeSection;
