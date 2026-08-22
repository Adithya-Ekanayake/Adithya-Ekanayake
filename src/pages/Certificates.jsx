import React from 'react';

const Certificates = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
          Certificates
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          Professional certifications and training programs.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '500' }}>React Developer Certification</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>freeCodeCamp, 2024</span>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '500' }}>JavaScript Algorithms</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>freeCodeCamp, 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;