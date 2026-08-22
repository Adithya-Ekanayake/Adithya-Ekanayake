import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaRocket,
  FaSitemap
} from 'react-icons/fa';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.slug === slug || p.id.toString() === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2 className="section-title">Project Not Found</h2>
        <p className="text-muted mb-4">The requested project case study could not be located.</p>
        <Link to="/projects" className="btn btn-primary">
          <FaArrowLeft /> Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* Header Banner */}
      <div className="details-banner" style={{ background: project.imageBg }}>
        <div className="container">
          <button className="back-link-btn font-mono" onClick={() => navigate('/projects')}>
            <FaArrowLeft /> Back to All Projects
          </button>

          <span className="details-category-badge badge badge-accent font-mono">
            {project.category} • {project.year}
          </span>

          <h1 className="details-title">{project.title}</h1>
          <p className="details-tagline">{project.tagline}</p>

          <div className="details-header-actions">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> View Source Code
              </a>
            )}
            {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaExternalLinkAlt /> Open Live App
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container details-content-container">
        {/* Tech Stack Pills */}
        <div className="details-tech-bar card">
          <span className="bar-label font-mono">Technologies Used:</span>
          <div className="bar-pills">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge badge-accent font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview, Problem & Solution */}
        <div className="details-section-grid">
          <motion.div
            className="details-card card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="details-card-title">Project Overview</h3>
            <p className="details-text">{project.description}</p>
          </motion.div>

          <motion.div
            className="details-card card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="details-card-title">The Problem & Solution</h3>
            <div className="problem-block">
              <span className="block-label text-warning font-mono">PROBLEM:</span>
              <p className="details-text">{project.problem}</p>
            </div>
            <div className="solution-block">
              <span className="block-label text-success font-mono">SOLUTION:</span>
              <p className="details-text">{project.solution}</p>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="details-card card mb-4">
            <h3 className="details-card-title">Key Architectural Features</h3>
            <div className="features-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <FaCheckCircle className="feat-icon text-success" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visual Architecture Flow */}
        {project.architecture && (
          <div className="details-card card mb-4">
            <h3 className="details-card-title">
              <FaSitemap className="inline-icon text-accent" /> Visual System Architecture
            </h3>
            <p className="details-text mb-3">
              Conceptual data flow demonstrating component decoupling and request lifecycle:
            </p>

            <div className="architecture-flow-diagram">
              {project.architecture.map((arch, index) => (
                <React.Fragment key={index}>
                  <div className="arch-node card">
                    <span className="node-step font-mono">0{index + 1}</span>
                    <h4 className="node-title">{arch.step}</h4>
                    <p className="node-desc">{arch.description}</p>
                  </div>
                  {index < project.architecture.length - 1 && (
                    <div className="arch-arrow font-mono">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Lessons Learned */}
        <div className="details-section-grid">
          {project.challenges && (
            <div className="details-card card">
              <h3 className="details-card-title">
                <FaExclamationTriangle className="inline-icon text-amber" /> Key Technical Challenges
              </h3>
              <ul className="details-bullets">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {project.lessonsLearned && (
            <div className="details-card card">
              <h3 className="details-card-title">
                <FaLightbulb className="inline-icon text-amber" /> Lessons Learned
              </h3>
              <ul className="details-bullets">
                {project.lessonsLearned.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Future Improvements */}
        {project.futureImprovements && (
          <div className="details-card card mt-4">
            <h3 className="details-card-title">
              <FaRocket className="inline-icon text-accent" /> Roadmap & Future Improvements
            </h3>
            <ul className="details-bullets">
              {project.futureImprovements.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="text-center mt-5 mb-4">
          <button className="btn btn-secondary" onClick={() => navigate('/projects')}>
            <FaArrowLeft /> Return to Projects Directory
          </button>
        </div>
      </div>
    </div>
  );
}
