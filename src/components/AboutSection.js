import React, { Component } from 'react';
import content from '../utils/Content';
import me from '../img/me.jpg';
import '../styles/App.css';

class AboutSection extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.getText = this.getText.bind(this);
  // }

  // static getText() {
  //   for (const paragraph in content.website.about.paragraphs) {
  //
  //   }
  // }

  render() {
    console.log(content.website.about.paragraphs);

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
            <img src={me} alt="About Isaac" />
          </div>
          <div className="aboutText">
            {content.website.about.paragraphs.map((paragraph, index) => (
              <p>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;


// <p>
// Hi, my name is Isaac Gluck.
// I am an aspiring software engineer at Dartmouth College.
// I began my coding career at Stuyvesant High School and have not looked back.
// I&apos;ve taken classes in Python, Java, and software development (HTML, CSS, and Javascript).
// </p>
// <p>
// Outside the classroom I&apos;ve delved further into web development, learning PHP, SQL, Mongo, and jQuery on my own time.
// I&apos;m currently learning Node.js and React.
// I work as a teaching assistant and tutor as well as doing independent research in the Evolutionary Computational Genomics Lab at Dartmouth.
// I also had an amazing experience interning at Amazon.
// </p>
// <p>
// Beyond the screen, I am an avid soccer fan and player (you&apos;ll never walk alone) and have just fallen in love with ultimate frisbee.
// I have played the violin my entire life and recently taught myself guitar.
// </p>
