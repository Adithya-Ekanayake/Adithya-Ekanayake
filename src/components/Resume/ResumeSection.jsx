import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye, FaTimes, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import './Resume.css';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <motion.div
          className="resume-card card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="resume-grid">
            <div className="resume-text-content">
              <span className="section-tag">{'// 09. RESUME & CV'}</span>
              <h2 className="resume-headline">Want to know more about my work?</h2>
              <p className="resume-subtext">
                Explore a concise profile of my academic journey, practical development work, technical toolkit, and continued growth toward a career in software engineering.
              </p>

              <div className="resume-highlights-list font-mono">
                <span><FaCheckCircle className="inline-icon text-success" /> Information Systems Undergraduate (SUSL)</span>
                <span><FaCheckCircle className="inline-icon text-success" /> React.js & Modern Web Architecture</span>
                <span><FaCheckCircle className="inline-icon text-success" /> Open for Software Engineering Internships</span>
              </div>

              <div className="resume-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <FaEye /> View Resume Summary
                </button>
                <a
                  href="/resume/Adithya_Ekanayake_Resume.pdf"
                  download="Adithya_Ekanayake_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FaFileDownload /> Download PDF Resume
                </a>
              </div>
            </div>

            <div className="resume-preview-box">
              <div className="resume-paper-graphic">
                <div className="paper-header">
                  <div className="paper-line long font-mono">ADITHYA EKANAYAKE</div>
                  <div className="paper-line short">Software Developer • Information Systems</div>
                </div>
                <div className="paper-body">
                  <div className="paper-block"></div>
                  <div className="paper-block"></div>
                  <div className="paper-block short"></div>
                </div>
                <div className="paper-badge font-mono">PDF DOCUMENT</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {isPreviewOpen && (
        <div className="modal-backdrop" onClick={() => setIsPreviewOpen(false)}>
          <div className="resume-modal-card card" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-top">
              <h3 className="modal-title font-mono">Adithya Ekanayake — Resume Summary</h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsPreviewOpen(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="resume-modal-body">
              <div className="resume-doc-preview">
                <h4>Adithya Ekanayake</h4>
                <p className="text-muted">Information Systems Undergraduate | Full-Stack Developer | Technology Enthusiast</p>
                <hr className="my-2" />

                <h5>Professional Summary</h5>
                <p>Motivated Information Systems undergraduate with hands-on experience building responsive web interfaces and full-stack applications. Interested in software engineering, business analysis, data, and practical AI integration, with a focus on learning through meaningful projects.</p>
                
                <h5>Education</h5>
                <p><strong>BSc (Hons) in Information Systems (Reading)</strong></p>
                <p>Sabaragamuwa University of Sri Lanka, Faculty of Computing | 2024 - Present</p>
                <p><strong>GCE A/L (Physical Stream)</strong> | Pushpadana Girls' College Kandy | 2020 - 2023</p>

                <h5 className="mt-3">Technical Strengths</h5>
                <p><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, responsive UI design, Framer Motion</p>
                <p><strong>Backend & Data:</strong> Node.js, Express.js, Spring Boot, MySQL, database design, REST APIs</p>
                <p><strong>Tools & Practices:</strong> Git, GitHub, VS Code, Postman, Figma, project management, business analysis</p>

                <h5 className="mt-3">Featured Projects</h5>
                <p><strong>EduConnect:</strong> Peer-to-peer skills sharing platform for university students</p>
                <p><strong>Coasty Lanka:</strong> Beach and travel exploration platform for Sri Lanka</p>
                <p><strong>Student Management System:</strong> University academic administration app</p>
                <p><strong>DevPulse:</strong> Developer activity monitoring and project task tracking dashboard</p>

                <h5 className="mt-3">Professional Development</h5>
                <p>Currently expanding full-stack project development and deployment skills while learning AI integration, business analysis, data analysis, and project management.</p>
                <p>Open to software engineering internships and collaborative opportunities where I can contribute, learn, and build useful digital solutions.</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setIsPreviewOpen(false)}>
                Close Preview
              </button>
              <a
                href="/resume/Adithya_Ekanayake_Resume.pdf"
                download="Adithya_Ekanayake_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaFileDownload /> Download PDF Resume <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
