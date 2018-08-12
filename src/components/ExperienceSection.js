import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import AppNexus from '../img/AppNexus';
import Amazon from '../img/Amazon';
import Dartmouth from '../img/Dartmouth';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/App.css';

class ExperienceSection extends Component {
  render() {
    return (
      <div className="experienceSection" id="experience">
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
              icon={<Dartmouth />}
            >
              <h3 className="vertical-timeline-element-title">
Research Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
Dartmouth College - Hanover, NH
              </h4>
              <p>
About research.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<Amazon />}
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

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<Dartmouth />}
            >
              <h3 className="vertical-timeline-element-title">
CS 10 Teacher&apos;s Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
Dartmouth College - Hanover, NH
              </h4>
              <p>
About TA.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
