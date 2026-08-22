import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
          Contact
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          adithyaekanayake2@gmail.com
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://github.com/Adithya-Ekanayake" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: '"Inter", sans-serif' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adithya-ekanayake-b38267349/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: '"Inter", sans-serif' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;