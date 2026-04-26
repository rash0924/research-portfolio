import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { componentsData } from '../data/componentsData';
import { ArrowLeft, Leaf, BugOff, Cpu, TrendingUp } from 'lucide-react';
import ExpandableCard from '../components/ExpandableCard';
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
        <ExpandableCard title="Introduction" delay="100" titleColor={feature.color}>
          <p>{feature.intro}</p>
        </ExpandableCard>

        <ExpandableCard title="Research Gap" delay="200" titleColor={feature.color}>
          <p>{feature.gap}</p>
        </ExpandableCard>

        <ExpandableCard title="Methodology" delay="300" titleColor={feature.color}>
          <p>{feature.methodology}</p>
        </ExpandableCard>

        {feature.results && (
          <ExpandableCard title="Results & Findings" delay="400" titleColor={feature.color}>
            <p>{feature.results}</p>
          </ExpandableCard>
        )}
      </div>
    </div>
  );
};

export default FeatureDetail;
