import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy
} from 'react-icons/fa';
import './Contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'adithyaekanayake2@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{'// 10. GET IN TOUCH'}</span>
          <h2 className="section-title">Let's Connect & Build</h2>
          <p className="section-subtitle">
            Whether you have a question, internship opportunity, software project idea, or just want to connect, feel free to drop a message!
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-card card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              I'm actively seeking software engineering internships and collaborative web development projects.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon-box"><FaEnvelope /></div>
                <div className="info-details">
                  <span className="info-label">Direct Email</span>
                  <span className="info-value font-mono">{emailAddress}</span>
                  <button className="copy-btn font-mono" onClick={handleCopyEmail}>
                    <FaCopy /> {copiedEmail ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><FaGithub /></div>
                <div className="info-details">
                  <span className="info-label">GitHub</span>
                  <a
                    href="https://github.com/Adithya-Ekanayake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    github.com/Adithya-Ekanayake
                  </a>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon-box"><FaLinkedin /></div>
                <div className="info-details">
                  <span className="info-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/adithya-ekanayake-b38267349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    linkedin.com/in/adithya-ekanayake
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><FaMapMarkerAlt /></div>
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">Faculty of Computing, SUSL, Sri Lanka 🇱🇰</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="form-success-state">
                <FaCheckCircle className="success-icon" />
                <h3 className="success-title">Message Client Opened!</h3>
                <p className="success-text">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your default email client has been prepared to send your message directly to {emailAddress}.
                </p>
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label font-mono">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Adithya, I'd like to discuss a project..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <FaPaperPlane /> Send Message via Email
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
