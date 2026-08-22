import React from 'react';
import { motion } from 'framer-motion';
import useGitHub from '../../hooks/useGitHub';
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUserFriends,
  FaFolder,
  FaExternalLinkAlt,
  FaSpinner,
  FaInfoCircle
} from 'react-icons/fa';
import './GitHub.css';

export default function GitHubSection() {
  const { data, loading } = useGitHub('Adithya-Ekanayake');

  if (loading) {
    return (
      <section id="github" className="section github-section">
        <div className="container text-center py-5">
          <FaSpinner className="spinner-icon" />
          <p className="loading-text font-mono">Fetching GitHub Developer Metrics...</p>
        </div>
      </section>
    );
  }

  const { profile, repos, languages, isFallback } = data || {};

  return (
    <section id="github" className="section github-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 07. GITHUB METRICS</span>
          <h2 className="section-title">Open Source & Activity</h2>
          <p className="section-subtitle">
            Live GitHub REST API statistics, repository metrics, and code activity breakdown.
          </p>
        </div>

        {isFallback && (
          <div className="fallback-banner">
            <FaInfoCircle className="inline-icon" /> Showing cached GitHub profile metrics (API request limit fallback).
          </div>
        )}

        <div className="github-stats-grid">
          <div className="stat-card card">
            <div className="stat-icon"><FaFolder /></div>
            <div className="stat-info">
              <span className="stat-value font-mono">{repos?.length || profile?.publicRepos || 0}</span>
              <span className="stat-label">Repositories & Contributions</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon"><FaStar /></div>
            <div className="stat-info">
              <span className="stat-value font-mono">{profile?.stars || 34}</span>
              <span className="stat-label">Total Stars</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon"><FaUserFriends /></div>
            <div className="stat-info">
              <span className="stat-value font-mono">{profile?.followers || 42}</span>
              <span className="stat-label">Followers</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon"><FaGithub /></div>
            <div className="stat-info">
              <span className="stat-value font-mono">@{profile?.username || 'Adithya-Ekanayake'}</span>
              <span className="stat-label">GitHub Handle</span>
            </div>
          </div>
        </div>

        {languages && languages.length > 0 && (
          <div className="languages-card card">
            <h3 className="card-inner-title font-mono">// Primary Languages</h3>
            <div className="language-bar">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="bar-segment"
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="language-legend">
              {languages.map((lang) => (
                <div key={lang.name} className="legend-item">
                  <span className="dot" style={{ backgroundColor: lang.color }} />
                  <span className="legend-name">{lang.name}</span>
                  <span className="legend-percent font-mono">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <h3 className="section-subheading font-mono">// Featured GitHub Repositories</h3>
        <div className="repos-grid">
          {repos?.map((repo, idx) => (
            <motion.div
              key={repo.id || idx}
              className="repo-card card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <div className="repo-header">
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-title-link"
                >
                  <FaFolder className="folder-icon" /> {repo.name}
                </a>
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-ext-link"
                  aria-label="View on GitHub"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <p className="repo-desc">{repo.description}</p>

              <div className="repo-meta font-mono">
                {repo.language && (
                  <span className="repo-lang">
                    <span className="dot accent-dot" /> {repo.language}
                  </span>
                )}
                <span className="repo-stat">
                  <FaStar /> {repo.stars}
                </span>
                <span className="repo-stat">
                  <FaCodeBranch /> {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
