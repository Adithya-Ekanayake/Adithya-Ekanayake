import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme, openCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'hero' },
    { name: 'About', path: '/#about', sectionId: 'about' },
    { name: 'Skills', path: '/#skills', sectionId: 'skills' },
    { name: 'Projects', path: '/projects', sectionId: 'projects' },
    { name: 'Experience', path: '/#experience', sectionId: 'experience' },
    { name: 'Certificates', path: '/#certificates', sectionId: 'certificates' },
    { name: 'Contact', path: '/#contact', sectionId: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to section if on home page, else navigate
  const handleNavClick = (link, e) => {
    setMobileMenuOpen(false);
    if (link.path === '/projects') {
      return; // Standard React Router navigation
    }
    
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(link.sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(link.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={(e) => handleNavClick({ path: '/', sectionId: 'hero' }, e)}>
          <span className="logo-badge">AE</span>
          <span className="logo-text">ADITHYA EKANAYAKE</span>
        </Link>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`nav-link ${
                location.pathname === link.path || (location.pathname === '/' && link.path === '/')
                  ? 'active'
                  : ''
              }`}
              onClick={(e) => handleNavClick(link, e)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Command Palette Trigger */}
          <button
            className="cmd-palette-btn"
            onClick={openCommandPalette}
            aria-label="Open Command Palette"
            title="Open Command Palette (Ctrl+K)"
          >
            <FaSearch className="cmd-icon" />
            <span className="cmd-key font-mono">⌘K</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/AdithyaEkanayake"
            target="_blank"
            rel="noopener noreferrer"
            className="social-nav-link"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-inner container">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(link, e)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-menu-footer">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCommandPalette();
                  }}
                >
                  <FaSearch /> Command Palette (Ctrl+K)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}