import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

export default function ProjectsSection({ isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'React', 'JavaScript', 'Web', 'Academic', 'Full Stack'];

  const displayedProjects = isFullPage
    ? projects
    : projects.filter((p) => p.featured || p.id === 'educonnect' || p.id === 'coasty-lanka' || p.id === 'student-management-system');

  const filteredProjects = displayedProjects.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 03. FEATURED WORK</span>
          <h2 className="section-title">Software Projects & Case Studies</h2>
          <p className="section-subtitle">
            A showcase of web applications, academic tools, and software solutions engineered with React, JavaScript, and modern web tech.
          </p>
        </div>

        <div className="projects-controls">
          <div className="project-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`project-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="project-thumbnail"
                  style={{ background: project.imageBg }}
                >
                  <div className="thumbnail-content">
                    <span className="thumbnail-year font-mono">{project.year}</span>
                    <h3 className="thumbnail-title">{project.title}</h3>
                  </div>
                  <span className="project-category-badge badge badge-accent">
                    {project.category}
                  </span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <div className="external-links">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label="GitHub Repository"
                          title="GitHub Repository"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label="Live Demo"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="btn-details-link"
                    >
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!isFullPage && (
          <div className="view-all-projects-wrapper">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects Explorer <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
