import React from 'react';
import { FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import './DeveloperStatus.css';

export default function DeveloperStatus() {
  return (
    <div className="developer-status-card card">
      <div className="status-header">
        <div className="status-indicator">
          <span className="status-pulse"></span>
          <span className="status-badge-text font-mono">AVAILABLE FOR INTERNSHIP</span>
        </div>
        <span className="status-type-badge font-mono">DEV STATUS</span>
      </div>

      <div className="status-grid">
        <div className="status-item">
          <div className="status-icon-wrapper">
            <FaLaptopCode />
          </div>
          <div className="status-details">
            <span className="status-label">Currently Building</span>
            <span className="status-value">Supplier Registration System</span>
          </div>
        </div>

        <div className="status-item">
          <div className="status-icon-wrapper">
            <FaCode />
          </div>
          <div className="status-details">
            <span className="status-label">Technical Focus</span>
            <span className="status-value font-mono">•React •Node.js •SQLite •Java Script</span>
          </div>
        </div>

        <div className="status-item">
          <div className="status-icon-wrapper">
            <FaMapMarkerAlt />
          </div>
          <div className="status-details">
            <span className="status-label">Location</span>
            <span className="status-value">Sri Lanka 🇱🇰 (Open to Remote / Hybrid)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
