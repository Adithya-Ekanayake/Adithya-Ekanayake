import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaTerminal } from 'react-icons/fa';
import DeveloperStatus from '../DeveloperStatus/DeveloperStatus';
import './Hero.css';

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Interactive Ambient Grid */}
      <div className="hero-bg-grid" aria-hidden="true">
        <div className="grid-overlay"></div>
        <div className="ambient-glow"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Main Hero Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero-badge-row">
              <span className="badge badge-accent">
                <FaTerminal className="inline-icon" /> BUILDING • LEARNING • INNOVATING
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">Adithya Ekanayake.</span>
            </h1>

            <h2 className="hero-subtitle">
              Information Systems Undergraduate | Tech Enthusiast | Problem Solver | Business & Data Explorer
            </h2>

            <p className="hero-bio">
              
              I’m a curious Information Systems student passionate about turning ideas into digital solutions and exploring the intersection of technology, business, data, and project management.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={handleExploreClick}>
                Explore My Work <FaArrowRight />
              </a>
              <a
                href="/resume/Adithya_Ekanayake_Resume.pdf"
                download="Adithya_Ekanayake_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaFileDownload /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="social-label font-mono">Connect:</span>
              <a
                href="https://github.com/Adithya-Ekanayake"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adithya-ekanayake-b38267349/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:adithyaekanayake2@gmail.com"
                className="social-pill"
                aria-label="Email Contact"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </motion.div>

          {/* Profile Visual Card */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            
          <div className="profile-card">
              <div className="profile-image-container">
                <img
                  className="profile-avatar-placeholder"
                  src="/pp.png"
                  alt="Adithya Ekanayake"
                />
                <div className="profile-ring"></div>
              </div>

              <div className="profile-meta">
                <h3 className="profile-name">Adithya Ekanayake</h3>
                <p className="profile-title">BSc (Hons) Information Systems</p>
                <p className="profile-dept">Sabaragamuwa University of Sri Lanka</p>
              </div>

              <div className="profile-code-snippet font-mono">
                <span className="code-line"><span className="code-keyword">const</span> developer = &#123;</span>
                <span className="code-line indent">&nbsp;&nbsp;name: <span className="code-string">'Adithya Ekanayake'</span>,</span>
                <span className="code-line indent">&nbsp;&nbsp;role: <span className="code-string">'Systems & Data Explorer'</span>,</span>
                <span className="code-line indent">&nbsp;&nbsp;status: <span className="code-string">'Building & Learning'</span></span>
                <span className="code-line">&#125;;</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Developer Status Widget */}
        <motion.div
          className="hero-status-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DeveloperStatus />
        </motion.div>
      </div>
    </section>
  );
}