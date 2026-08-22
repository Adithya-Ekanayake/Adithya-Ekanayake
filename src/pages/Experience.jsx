import React from 'react';

const Experience = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
          Experience
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          Information Systems undergraduate with focus on web development and full-stack experience.
        </p>
        <ul style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <li>2023: Enrolled in the Information Systems degree</li>
          <li>2024: Started learning degree foundations, basic web development, information systems basics, and structured programming</li>
          <li>2025: Learned OOP, MySQL, project management, and basic full-stack development</li>
          <li>2026: Continuing to learn and complete full-stack project development and deployment, integrate AI into applications, and learn business and data analysis</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;