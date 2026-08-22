import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-badge">AE</span>
            <span className="footer-logo-text font-mono">ADITHYA EKANAYAKE</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Adithya-Ekanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-ekanayake-b38267349/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:adithyaekanayake2@gmail.com"
              className="social-icon-btn"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text font-mono">
            © 2026 Adithya Ekanayake. All rights reserved. Information Systems Undergraduate & Software Developer.
          </p>

          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Back to top">
            Back to Top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
