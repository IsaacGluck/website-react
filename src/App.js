import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
      </div>
    );
  }
}

export default App;
