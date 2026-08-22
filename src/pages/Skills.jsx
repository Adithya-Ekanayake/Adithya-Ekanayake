import React from 'react';

const Skills = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
          Skills
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem', maxWidth: 'ch(80)' }}>
          Technical skills in frontend, backend, and database technologies.
        </p>
        <ul style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js, Express</li>
          <li>MySQL, Git, GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;