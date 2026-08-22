import React from 'react';

const Resume = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          // 09. RESUME & CV
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem', maxWidth: 'ch(80)' }}>
          Want to know more about my work?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>°</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Education</strong>
            <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', margin: '0.5rem 0', fontSize: '0.9rem' }}>BSc (Hons) in Information Systems</strong>
            <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', margin: '0.3rem 0', fontSize: '0.85rem' }}>Sabaragamuwa University of Sri Lanka</strong>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>°</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Experience</strong>
            <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', margin: '0.5rem 0', fontSize: '0.9rem' }}>Information Systems Undergraduate & Software Developer</strong>
            <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', margin: '0.3rem 0', fontSize: '0.85rem' }}>Available for internship</strong>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>°</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Skills</strong>
            <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', margin: '0.5rem 0', fontSize: '0.9rem' }}>React, JavaScript, HTML, CSS, Node.js, MySQL</strong>
          </div>
        </div>
        <div className="mt-8">
          <a href="#" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '500', color: 'var(--accent)', textDecoration: 'none', fontSize: '1rem', background: 'var(--accent)', color: 'var(--bg)', padding: '0.75rem 1.5rem', borderRadius: 'lg', display: 'inline-block' }}>
            Download Resume
          </a>
          <a href="#" style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.875rem', color: 'var(--text-muted)', textDecoration: 'none', marginLeft: '1rem', transition: 'color 0.2s ease' }}>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;