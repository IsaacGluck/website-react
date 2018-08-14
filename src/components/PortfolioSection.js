import React, { Component } from 'react';
import '../styles/App.css';
import Memur from '../img/Memur';
import Pacman from '../img/Pacman';
import Watch from '../img/Watch';
import Tse from '../img/Tse';
import Ultimate from '../img/Ultimate';
import Website from '../img/Website';
import content from '../utils/Content';

class PortfolioSection extends Component {
  render() {
    return (
      <div className="portfolioSection" id="portfolio">
        <div className="portfolioHeader">
          <div className="portfolioHeaderText">
            <span>
Portfolio
            </span>
          </div>
        </div>
        <div className="portfolioBody">
          <div className="portfolioColumn">
            <div className="portfolioTwoRow">
              <div className="portfolioRowHeader">
                <Memur />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Memur}
              </div>
            </div>
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
                <Pacman />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Pacman}
              </div>
            </div>
          </div>
          <div className="portfolioColumn">
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
                <Watch />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Watch}
              </div>
            </div>
            <div className="portfolioTwoRow">
              <div className="portfolioRowHeader">
                <Tse />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Tse}
              </div>
            </div>
          </div>
          <div className="portfolioColumn">
            <div className="portfolioTwoRow">
              <div className="portfolioRowHeader">
                <Ultimate />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Ultimate}
              </div>
            </div>
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
                <Website />
              </div>
              <div className="portfolioRowBody">
                {content.website.portfolio.Website}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
