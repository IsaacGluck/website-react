import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/App.css';
import AppNexus from '../img/AppNexus';

class ExperienceSection extends Component {
  render() {
    return (
      <div className="experienceSection">
        <div className="experienceHeader">
          <div className="experienceHeaderText">
            <span>
Experience
            </span>
          </div>
        </div>
        <div className="experienceBody">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: '#ecf0f1', color: '#fff' }}
              icon={<AppNexus />}
            >
              <h3 className="vertical-timeline-element-title">
Software Development Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
AppNexus - New York, NY
              </h4>
              <p>
About AppNexus.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: '#ecf0f1', color: '#fff' }}
              icon={<AppNexus />}
            >
              <h3 className="vertical-timeline-element-title">
Software Development Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
Amazon - New York, NY
              </h4>
              <p>
About Amazon.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
