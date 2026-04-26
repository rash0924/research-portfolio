import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { componentsData } from '../data/componentsData';
import { ArrowLeft, Leaf, BugOff, Cpu, TrendingUp } from 'lucide-react';
import './FeatureDetail.css';

const IconMap = {
  Leaf: Leaf,
  BugOff: BugOff,
  Cpu: Cpu,
  TrendingUp: TrendingUp
};

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = componentsData[id];

  if (!feature) {
    return (
      <div className="feature-detail-container animate-fade-in">
        <h2>Component not found.</h2>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  const FeatureIcon = IconMap[feature.icon];

  return (
    <div className="feature-detail-container animate-fade-in">
      <Link to="/" className="btn btn-secondary glass-panel back-button delay-100">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <header className="feature-detail-header delay-200">
        <div className="detail-icon" style={{ borderColor: feature.color, color: feature.color }}>
          <FeatureIcon size={48} />
        </div>
        <h1 className="gradient-text">{feature.title}</h1>
      </header>

      <div className="detail-sections">
        <section className="detail-card glass-panel delay-100">
          <div className="section-header">
            <h3>Introduction</h3>
            <div className="divider"></div>
          </div>
          <p>{feature.intro}</p>
        </section>

        <section className="detail-card glass-panel delay-200">
          <div className="section-header">
            <h3>Research Gap</h3>
            <div className="divider"></div>
          </div>
          <p>{feature.gap}</p>
        </section>

        <section className="detail-card glass-panel delay-300">
          <div className="section-header">
            <h3>Methodology</h3>
            <div className="divider"></div>
          </div>
          <p>{feature.methodology}</p>
        </section>

        {feature.results && (
          <section className="detail-card glass-panel delay-400">
            <div className="section-header">
              <h3 style={{ color: feature.color }}>Results & Findings</h3>
              <div className="divider" style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}></div>
            </div>
            <p>{feature.results}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default FeatureDetail;
