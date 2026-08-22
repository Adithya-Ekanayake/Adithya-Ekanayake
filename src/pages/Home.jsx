import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline';
import EducationSection from '../components/Education/EducationSection';
import CertificatesSection from '../components/Certificates/CertificatesSection';
import GitHubSection from '../components/GitHub/GitHubSection';
import Terminal from '../components/Terminal/Terminal';
import ResumeSection from '../components/Resume/ResumeSection';
import ContactSection from '../components/Contact/ContactSection';

export default function Home({ toggleTheme }) {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <ProjectsSection isFullPage={false} />
      <ExperienceTimeline />
      <EducationSection />
      <CertificatesSection />
      <GitHubSection />
      <Terminal toggleTheme={toggleTheme} />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}