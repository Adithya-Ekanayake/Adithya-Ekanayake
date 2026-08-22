import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaAward, FaCheckCircle } from 'react-icons/fa';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close Button */}
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-badge-box" style={{ background: certificate.badgeBg }}>
              <FaAward />
            </div>
            <div>
              <span className="badge badge-accent font-mono">{certificate.category}</span>
              <h3 className="modal-title">{certificate.title}</h3>
              <p className="modal-issuer">
                Issued by <strong>{certificate.issuer}</strong> • {certificate.date}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p className="modal-desc">{certificate.description}</p>

            {certificate.skillsVerified && (
              <div className="modal-skills-section">
                <h4 className="modal-subtitle font-mono">Skills Verified:</h4>
                <div className="modal-skills-tags">
                  {certificate.skillsVerified.map((skill) => (
                    <span key={skill} className="badge font-mono">
                      <FaCheckCircle className="inline-icon text-success" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {certificate.credentialId && (
              <div className="credential-id-box font-mono">
                <span className="id-label">Credential ID:</span> {certificate.credentialId}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            {certificate.verificationLink && (
              <a
                href={certificate.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Verify Credential <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
