import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaBrain
} from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiVscodium,
  SiPostman
} from 'react-icons/si';
import './Skills.css';

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiJavascript: SiJavascript,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  FaBrain: FaBrain,
  SiMysql: SiMysql,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  SiVscodium: SiVscodium,
  FaFigma: FaFigma,
  SiPostman: SiPostman
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI & ML', 'Database', 'Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getIcon = (iconName) => {
    const IconComp = iconMap[iconName] || FaCode;
    return <IconComp />;
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{'// 02. SKILLS & TECHNOLOGIES'}</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Tools, frameworks, and technologies I use to design, develop, and deploy software.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div className="skills-grid" layout>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill-card card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">{getIcon(skill.icon)}</div>
                  <span className="badge font-mono">{skill.category}</span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>

                {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                  <div className="skill-projects">
                    <span className="projects-label font-mono">Projects:</span>
                    <div className="projects-tags">
                      {skill.relatedProjects.map((p) => (
                        <span key={p} className="project-tag">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
