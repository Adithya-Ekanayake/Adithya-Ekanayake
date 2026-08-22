import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch,
  FaHome,
  FaUser,
  FaCode,
  FaFolder,
  FaHistory,
  FaGraduationCap,
  FaAward,
  FaGithub,
  FaTerminal,
  FaFileDownload,
  FaEnvelope,
  FaAdjust,
  FaTimes
} from 'react-icons/fa';
import './CommandPalette.css';

export default function CommandPalette({ isOpen, onClose, toggleTheme }) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const commands = [
    { id: 'home', title: 'Go to Home', sectionId: 'hero', path: '/', icon: <FaHome /> },
    { id: 'about', title: 'Go to About Me', sectionId: 'about', path: '/#about', icon: <FaUser /> },
    { id: 'skills', title: 'Go to Technical Skills', sectionId: 'skills', path: '/#skills', icon: <FaCode /> },
    { id: 'projects', title: 'Explore Projects & Case Studies', sectionId: 'projects', path: '/projects', icon: <FaFolder /> },
    { id: 'experience', title: 'View Developer Journey', sectionId: 'experience', path: '/#experience', icon: <FaHistory /> },
    { id: 'education', title: 'Academic Background & Degree', sectionId: 'education', path: '/#education', icon: <FaGraduationCap /> },
    { id: 'certificates', title: 'View Verified Certifications', sectionId: 'certificates', path: '/#certificates', icon: <FaAward /> },
    { id: 'github', title: 'View GitHub Metrics & Repos', sectionId: 'github', path: '/#github', icon: <FaGithub /> },
    { id: 'terminal', title: 'Open Developer Terminal Playground', sectionId: 'terminal', path: '/#terminal', icon: <FaTerminal /> },
    { id: 'resume', title: 'Download Resume PDF', action: 'download_resume', icon: <FaFileDownload /> },
    { id: 'contact', title: 'Send Message / Contact', sectionId: 'contact', path: '/#contact', icon: <FaEnvelope /> },
    { id: 'theme', title: 'Toggle Theme (Dark / Light)', action: 'toggle_theme', icon: <FaAdjust /> }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const executeCommand = (cmd) => {
    onClose();

    if (cmd.action === 'toggle_theme') {
      if (toggleTheme) toggleTheme();
      return;
    }

    if (cmd.action === 'download_resume') {
      window.open('/resume/Adithya_Ekanayake_Resume.pdf', '_blank');
      return;
    }

    if (cmd.path === '/projects') {
      navigate('/projects');
      return;
    }

    if (cmd.sectionId) {
      navigate(`/#${cmd.sectionId}`);

      const scrollToSection = (attempt = 0) => {
        const elem = document.getElementById(cmd.sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else if (attempt < 10) {
          window.requestAnimationFrame(() => scrollToSection(attempt + 1));
        }
      };

      scrollToSection();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        executeCommand(filteredCommands[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="palette-backdrop" onClick={onClose}>
        <motion.div
          className="palette-modal card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="palette-header">
            <FaSearch className="palette-search-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search section..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="palette-input font-mono"
            />
            <button className="palette-close-btn" onClick={onClose} aria-label="Close">
              <FaTimes />
            </button>
          </div>

          {/* Command List */}
          <div className="palette-list">
            {filteredCommands.length === 0 ? (
              <div className="palette-empty font-mono">No matching commands found.</div>
            ) : (
              filteredCommands.map((cmd, index) => (
                <div
                  key={cmd.id}
                  className={`palette-item ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="palette-item-icon">{cmd.icon}</div>
                  <span className="palette-item-title">{cmd.title}</span>
                  <span className="palette-item-shortcut font-mono">↵ Select</span>
                </div>
              ))
            )}
          </div>

          {/* Footer controls */}
          <div className="palette-footer font-mono">
            <span><strong>↑↓</strong> Navigate</span>
            <span><strong>↵</strong> Execute</span>
            <span><strong>ESC</strong> Dismiss</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
