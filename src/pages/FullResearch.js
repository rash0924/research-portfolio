import React from 'react';
import { Link } from 'react-router-dom';
import { fullResearchData } from '../data/fullResearchData';
import { ArrowLeft, BookOpenCheck } from 'lucide-react';
import './FeatureDetail.css'; // We can safely reuse the awesome CSS from the feature details!

const FullResearch = () => {
  return (
    <div className="feature-detail-container animate-fade-in">
      <Link to="/" className="btn btn-secondary glass-panel back-button delay-100">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <header className="feature-detail-header delay-200">
        <div className="detail-icon" style={{ borderColor: "var(--accent-primary)", color: "var(--accent-primary)" }}>
          <BookOpenCheck size={48} />
        </div>
        <h1 className="gradient-text">{fullResearchData.title}</h1>
      </header>

      <div className="detail-sections">
        <section className="detail-card glass-panel delay-100">
          <div className="section-header">
            <h3>Overall Introduction</h3>
            <div className="divider"></div>
          </div>
          <p>{fullResearchData.intro}</p>
        </section>

        <section className="detail-card glass-panel delay-200">
          <div className="section-header">
            <h3>Overall Research Gap</h3>
            <div className="divider"></div>
          </div>
          <p>{fullResearchData.gap}</p>
        </section>

        <section className="detail-card glass-panel delay-300">
          <div className="section-header">
            <h3>Overall Methodology</h3>
            <div className="divider"></div>
          </div>
          <p>{fullResearchData.methodology}</p>
        </section>

        {fullResearchData.results && (
          <section className="detail-card glass-panel delay-400">
            <div className="section-header">
              <h3 className="gradient-text">Key Results & Findings</h3>
              <div className="divider"></div>
            </div>
            <p>{fullResearchData.results}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default FullResearch;
