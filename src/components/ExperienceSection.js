import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import AppNexus from '../img/AppNexus';
import Amazon from '../img/Amazon';
import YC from '../img/YC';
import Dartmouth from '../img/Dartmouth';
import content from '../utils/Content';

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
              icon={<YC />}
            >
              <h3 className="vertical-timeline-element-title">
                {content.website.experience.Tassel.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {content.website.experience.Tassel.subtitle}
              </h4>
              <p>
                {content.website.experience.Tassel.text}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<AppNexus />}
            >
              <h3 className="vertical-timeline-element-title">
                {content.website.experience.AppNexus.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {content.website.experience.AppNexus.subtitle}
              </h4>
              <p>
                {content.website.experience.AppNexus.text}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<Dartmouth />}
            >
              <h3 className="vertical-timeline-element-title">
                {content.website.experience.Research.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {content.website.experience.Research.subtitle}
              </h4>
              <p>
                {content.website.experience.Research.text}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<Amazon />}
            >
              <h3 className="vertical-timeline-element-title">
                {content.website.experience.Amazon.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {content.website.experience.Amazon.subtitle}
              </h4>
              <p>
                {content.website.experience.Amazon.text}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element"
              icon={<Dartmouth />}
            >
              <h3 className="vertical-timeline-element-title">
                {content.website.experience.TA.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {content.website.experience.TA.subtitle}
              </h4>
              <p>
                {content.website.experience.TA.text}
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
