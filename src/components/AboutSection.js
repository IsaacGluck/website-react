import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import content from '../utils/Content';
import me from '../img/me.jpg';
import '../styles/App.scss';

class AboutSection extends Component {
  render() {
    return (
      <div className="aboutSection" id="about">
        <div className="aboutHeader">
          <div className="aboutHeaderText">
            <span>
              About
            </span>
          </div>
        </div>
        <div className="aboutBody">
          <div className="aboutPhoto">
            <LazyLoad
              width={window.innerWidth <= 800 ? 320 : 400}
              height={window.innerWidth <= 800 ? 428 : 535}
              debounce={false}
            >
              <img src={me} alt="About Isaac" />
            </LazyLoad>
          </div>
          <div className="aboutText">

            {content.website.about.paragraphs.map((paragraph, index) => (
              <p dangerouslySetInnerHTML={{ __html: paragraph }} key={content.website.about.keys[index]} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
