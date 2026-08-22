import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { FaCalendarAlt, FaLaptopCode, FaCheck } from 'react-icons/fa';
import './Experience.css';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 04. DEVELOPER JOURNEY</span>
          <h2 className="section-title">Timeline & Milestones</h2>
          <p className="section-subtitle">
            My growth trajectory as an Information Systems undergraduate and aspiring software engineer from 2023 to 2026.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-node">
                <FaLaptopCode />
              </div>

              <div className="timeline-card card">
                <div className="timeline-header">
                  <span className="timeline-year font-mono">
                    <FaCalendarAlt className="inline-icon" /> {item.year}
                  </span>
                  {item.stage && (
                    <span className="badge badge-accent">{item.stage}</span>
                  )}
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p className="timeline-org">{item.organization}</p>

                <p className="timeline-desc">{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>
                        <FaCheck className="check-icon" /> {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="timeline-tech-tags">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="badge font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
