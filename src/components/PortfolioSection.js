import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="portfolioSection">
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
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
          </div>
          <div className="portfolioColumn">
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
            <div className="portfolioTwoRow">
              <div className="portfolioRowHeader">
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
          </div>
          <div className="portfolioColumn">
            <div className="portfolioTwoRow">
              <div className="portfolioRowHeader">
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
            <div className="portfolioOneRow">
              <div className="portfolioRowHeader">
Row Header
              </div>
              <div className="portfolioRowBody">
Row Body
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
