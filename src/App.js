import { Analytics } from '@vercel/analytics/react';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import './styles/App.scss';

class App extends Component {
  async componentDidMount() {
    await loadSlim(tsParticles);

    const response = await fetch('/utils/particles.json');
    const particlesConfig = await response.json();

    await tsParticles.load('particles-js', particlesConfig);
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
