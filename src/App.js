import React from 'react';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/sections/About';
import TechnologiesSection from './components/Technologies';
import ExperienceSection from './components/sections/Experience';
import CertificationsSection from './components/sections/Certifications';
import ProjectsSection from './components/Projects';
import ContactSection from './components/sections/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;