import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', fontSize: '1.2rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            01. ABOUT ME
          </span>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
            Engineering Mindset & Growth
          </h2>
          <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            A snapshot of my academic background, technical focus, and software development journey.
          </p>
        </div>
        <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          Adithya Ekanayake
        </h1>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem', maxWidth: 'ch(80)' }}>
          Information Systems undergraduate and aspiring Software Engineer with a passion for building clean, useful digital products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-md-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>📊</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Interested in Project Management</strong>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>📈</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Interested in Business Analysis</strong>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'lg', padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--accent)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>📊</span>
            <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Interested in Data Analysis</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;