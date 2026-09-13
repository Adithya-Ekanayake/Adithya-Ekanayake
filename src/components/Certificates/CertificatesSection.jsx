import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../../data/certificates';
import CertificateModal from './CertificateModal';
import { FaAward, FaExpandAlt } from 'react-icons/fa';
import './Certificates.css';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{'// 06. CERTIFICATIONS'}</span>
          <h2 className="section-title">Verified Qualifications</h2>
          <p className="section-subtitle">
            Professional certifications and technical credentials validating web development, JavaScript algorithms, and version control expertise.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card card"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="cert-badge-header" style={{ background: cert.badgeBg }}>
                <div className="cert-icon-container">
                  <FaAward />
                </div>
                <span className="cert-category-tag font-mono">{cert.category}</span>
                <button
                  className="cert-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  aria-label="Expand certificate details"
                >
                  <FaExpandAlt />
                </button>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  {cert.issuer} • <span className="font-mono">{cert.date}</span>
                </p>
                <p className="cert-desc-snippet">{cert.description}</p>

                <div className="cert-footer-link">
                  <span className="view-details-text">
                    View Verification & Details <FaExpandAlt className="inline-icon" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
