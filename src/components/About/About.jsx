import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

export default function About() {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: 'Information Systems Education',
      description: 'Undergraduate student in BSc (Hons) Information Systems at Sabaragamuwa University of Sri Lanka (Faculty of Computing). Studying computer science fundamentals, business system architecture, and modern software development.'
    },
    {
      icon: <FaCode />,
      title: 'Software Development Philosophy',
      description: 'Driven by clean code, modular architecture, reusable components, and performance optimization. I believe software should be intuitive, accessible, and maintainable.'
    },
    {
      icon: <FaRocket />,
      title: 'Career Aspiration',
      description: 'Aspiring Software Engineer focused on building scalable frontend and full-stack solutions. Eager to solve real-world problems in dynamic engineering teams through continuous learning.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Project Management & Problem Solving',
      description: 'I enjoy turning ideas into structured projects by planning workflows, coordinating teams, and delivering solutions that balance quality, timelines, and user needs.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Business & Data Analysis',
      description: 'I am interested in combining business analysis with data-driven insights to uncover opportunities, optimize processes, and support strategic decision-making through clear, actionable recommendations.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">Engineering Mindset & Growth</h2>
          <p className="section-subtitle">
            A snapshot of my academic background, technical focus, and software development journey.
          </p>
        </div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="about-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="about-icon-box">{card.icon}</div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
