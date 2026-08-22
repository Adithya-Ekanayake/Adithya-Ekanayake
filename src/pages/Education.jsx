import React from 'react';

const Education = () => {
  return (
    <section className="py-24 bg-[var(--bg)] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
          Education
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          2024 - Present: BSc (Hons) in Information Systems (Reading), Sabaragamuwa University of Sri Lanka
        </p>
        <div style={{ fontFamily: '"Inter", sans-serif', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <strong>Period:</strong> 2024 - Present<br />
          <strong>Degree:</strong> BSc (Hons) in Information Systems (Reading) <br />
          <strong>Institution:</strong> Sabaragamuwa University of Sri Lanka<br />
          <strong>Faculty:</strong> Faculty of Computing
          <br /><br />
          <strong>Period:</strong> 2020 - 2023<br />
          <strong>Qualification:</strong> GCE A/L (Physical Stream)<br />
          <strong>Institution:</strong> Pushpadana Girls' College Kandy<br />
          <strong>Core Academic Focus Areas:</strong> Combined Mathematics, Physics, Chemistry<br />
          <strong>Key Academic Activities:</strong> Developed analytical and quantitative problem-solving skills, applied scientific principles through physics and chemistry studies, and built a foundation for further studies in information systems and technology
        </div>
      </div>
    </section>
  );
};

export default Education;