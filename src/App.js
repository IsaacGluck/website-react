import { Analytics } from '@vercel/analytics/react';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import 'particles.js/particles';
import './styles/App.css';

const { particlesJS } = window;

class App extends Component {
  componentDidMount() {
    particlesJS.load('particles-js', '/utils/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="particles-js" id="particles-js" />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />

        <Analytics />
      </div>
    );
  }
}

export default App;
