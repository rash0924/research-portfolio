import React from 'react';
import { Link } from 'react-router-dom';
import { fullResearchData } from '../data/fullResearchData';
import { ArrowLeft, BookOpenCheck } from 'lucide-react';
import ExpandableCard from '../components/ExpandableCard';
import './FeatureDetail.css'; 

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
        <ExpandableCard title="Overall Introduction" delay="100">
          <p>{fullResearchData.intro}</p>
        </ExpandableCard>

        {fullResearchData.literatureSurvey && (
          <ExpandableCard title="Literature Survey" delay="150">
            <div className="literature-survey-content">
              <p>{fullResearchData.literatureSurvey.intro}</p>
              <div className="methodology-list">
                {fullResearchData.literatureSurvey.sections.map((section, index) => (
                  <div key={index} className="methodology-item">
                    <h4>{section.title}</h4>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
              
              {fullResearchData.literatureSurvey.table && (
                <div className="survey-table-container">
                  <h4>Table 3: Summary of Related Studies</h4>
                  <div className="table-responsive">
                    <table className="survey-table">
                      <thead>
                        <tr>
                          <th>Method Used</th>
                          <th>Application</th>
                          <th>Key Outcomes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fullResearchData.literatureSurvey.table.map((row, index) => (
                          <tr key={index}>
                            <td>{row.method}</td>
                            <td>{row.application}</td>
                            <td>{row.outcome}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {fullResearchData.literatureSurvey.summary && (
                <div className="survey-summary">
                  <p>{fullResearchData.literatureSurvey.summary}</p>
                </div>
              )}
            </div>
          </ExpandableCard>
        )}

        <ExpandableCard title="Overall Research Gap and Research Problem" delay="200">
          <div className="methodology-list">
            <div className="methodology-item">
              <h4>Research Gap</h4>
              <p>{fullResearchData.gap}</p>
            </div>
            {fullResearchData.problem && (
              <div className="methodology-item">
                <h4>Research Problem</h4>
                <p>{fullResearchData.problem}</p>
              </div>
            )}
          </div>
        </ExpandableCard>

        <ExpandableCard title="Overall Methodology" delay="300">
          {Array.isArray(fullResearchData.methodology) ? (
            <div className="methodology-list">
              {fullResearchData.methodology.map((item, index) => (
                <div key={index} className="methodology-item">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>{fullResearchData.methodology}</p>
          )}
        </ExpandableCard>

        {fullResearchData.results && (
          <ExpandableCard title="Key Results & Findings" delay="400">
            <p>{fullResearchData.results}</p>
          </ExpandableCard>
        )}
      </div>
    </div>
  );
};

export default FullResearch;
