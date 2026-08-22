import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { FaGraduationCap, FaMapMarkerAlt, FaBookOpen, FaAward } from 'react-icons/fa';
import './Education.css';

export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 05. ACADEMIC BACKGROUND</span>
          <h2 className="section-title">Education & Foundation</h2>
          <p className="section-subtitle">
            Formal university education building computer science fundamentals and software engineering domain knowledge.
          </p>
        </div>

        {education.map((item) => (
          <motion.div
            key={item.id}
            className="education-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="education-grid">
              <div className="education-main">
                <div className="edu-icon-badge">
                  <FaGraduationCap />
                </div>
                <div className="edu-title-group">
                  <span className="badge badge-accent font-mono">{item.period}</span>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <h4 className="edu-institution">{item.institution}</h4>
                  <p className="edu-faculty">{item.faculty}</p>
                  <p className="edu-location">
                    <FaMapMarkerAlt className="inline-icon" /> {item.location}
                  </p>
                </div>
              </div>

              <div className="education-content">
                <p className="edu-desc">{item.description}</p>

                <div className="edu-section-block">
                  <h5 className="block-title font-mono">
                    <FaBookOpen className="inline-icon" /> Core Academic Focus Areas
                  </h5>
                  <div className="subjects-grid">
                    {item.coreSubjects.map((subject) => (
                      <span key={subject} className="subject-chip font-mono">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="edu-section-block">
                    <h5 className="block-title font-mono">
                      <FaAward className="inline-icon" /> Key Academic Activities
                    </h5>
                    <ul className="achievements-list">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
