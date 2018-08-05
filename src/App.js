import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
      </div>
    );
  }
}

export default App;
