import React from 'react';
import { Leaf, BugOff, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      <header className="hero-section">
        <div className="badge glass-panel delay-100">
          <span className="pulse-dot"></span> Next-Gen Tea Research
        </div>
        <h1 className="hero-title delay-200">
          The Intelligent Future of <br />
          <span className="gradient-text">TEAVISION360</span>
        </h1>
        <p className="hero-subtitle delay-300">
          A comprehensive, data-driven research suite designed to revolutionize
          tea plantation management through artificial intelligence, IoT hardware,
          and market analytics.
        </p>
        <div className="hero-actions delay-300">
          <Link to="/full-research" className="btn btn-primary">
            Explore Research <ArrowRight size={18} />
          </Link>
          <Link to="/members" className="btn btn-secondary glass-panel">
            Meet the Team
          </Link>
        </div>
      </header>

      <section className="features-section">
        <Link to="/feature/grading" className="feature-card glass-panel delay-100" style={{ textDecoration: 'none' }}>
          <div className="icon-wrapper bg-green">
            <Leaf size={24} color="var(--accent-secondary)" />
          </div>
          <h3>Tea Leaf Grading</h3>
          <p>Automated visual analysis to accurately classify and grade plucked tea leaves.</p>
        </Link>

        <Link to="/feature/disease" className="feature-card glass-panel delay-100" style={{ textDecoration: 'none' }}>
          <div className="icon-wrapper bg-emerald">
            <BugOff size={24} color="var(--accent-primary)" />
          </div>
          <h3>Disease Identification</h3>
          <p>Early detection of pathological foliage issues using deep learning models.</p>
        </Link>

        <Link to="/feature/iot" className="feature-card glass-panel delay-200" style={{ textDecoration: 'none' }}>
          <div className="icon-wrapper bg-teal">
            <Cpu size={24} color="#14b8a6" />
          </div>
          <h3>IoT Fertilization</h3>
          <p>Data-driven soil analysis utilizing IoT sensors to optimize fertilizer deployment.</p>
        </Link>

        <Link to="/feature/market" className="feature-card glass-panel delay-200" style={{ textDecoration: 'none' }}>
          <div className="icon-wrapper bg-cyan">
            <TrendingUp size={24} color="#06b6d4" />
          </div>
          <h3>Market Data Analysis</h3>
          <p>Predictive analytics for tea market prices to assist in economic scaling.</p>
        </Link>
      </section>

      <section className="impact-section delay-300">
        <div className="section-header-center">
          <h2 className="gradient-text">Measurable Impact</h2>
          <p>Real-world performance metrics achieved during our testing phase.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card glass-panel">
            <h3>92%</h3>
            <p>Grading Accuracy</p>
            <span>Outperforming traditional manual grading techniques.</span>
          </div>
          <div className="stat-card glass-panel">
            <h3>30%</h3>
            <p>Fertilizer Savings</p>
            <span>Through localized IoT sensor recommendations.</span>
          </div>
          <div className="stat-card glass-panel">
            <h3>8-10%</h3>
            <p>MAPE Forecasting</p>
            <span>Highly accurate long-term market price predictions.</span>
          </div>
        </div>
      </section>

      <section className="commercial-section delay-400">
        <div className="commercial-card glass-panel">
          <div className="commercial-content">
            <h2>Commercialization & Future Scope</h2>
            <p>
              TEAVISION360 is not just a theoretical framework. It is designed as a highly scalable 
              <strong> Software-as-a-Service (SaaS)</strong> or hardware-software integrated solution. 
              By reducing labor costs and providing real-time data analysis, it offers massive economic viability 
              for tea factories, estate owners, and exporters globally.
            </p>
            <Link to="/full-research" className="btn btn-primary mt-4">
              Read Full Scope
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
