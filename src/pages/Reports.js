import React from 'react';
import { reportsData, individualReportsData } from '../data/reports';
import { Calendar, Download, User } from 'lucide-react';
import './Reports.css';

const Reports = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Published': return 'status-published';
      case 'Under Review': return 'status-review';
      case 'Draft': return 'status-draft';
      default: return '';
    }
  };

  return (
    <div className="reports-container animate-fade-in">
      <div className="page-header">
        <h1 className="gradient-text">Research Reports</h1>
        <p className="page-subtitle">Download individual component reports and the complete final project documentation.</p>
      </div>

      {/* Individual Member Reports */}
      <div>
        <h2 className="reports-section-title">Individual Component Reports</h2>
        <p className="reports-section-sub">Each team member's dedicated research component report.</p>
        <div className="individual-reports-grid">
          {individualReportsData.map((report, index) => (
            <div
              key={report.id}
              className={`individual-report-card glass-panel delay-${(index + 1) * 100}`}
              style={{ borderTopColor: report.color }}
            >
              <div className="individual-report-header">
                <div className="member-badge" style={{ background: `${report.color}18`, color: report.color }}>
                  <User size={14} />
                  {report.name}
                </div>
              </div>
              <h3 className="individual-report-title">{report.component}</h3>
              <p className="individual-report-desc">{report.description}</p>
              <div className="tags-container" style={{ marginBottom: '1rem' }}>
                {report.tags.map((tag, idx) => (
                  <span key={idx} className="tag" style={{ color: report.color }}>{tag}</span>
                ))}
              </div>
              <a href={report.link} download className="download-btn" style={{ borderColor: report.color, color: report.color }}>
                <Download size={16} />
                Download Report
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Final Report */}
      <div>
        <h2 className="reports-section-title">Project Deliverables</h2>
        <p className="reports-section-sub">Official project milestone submissions and final documentation.</p>
        <div className="reports-timeline">
          {reportsData.map((report, index) => (
            <div key={report.id} className={`report-item delay-${(index + 1) * 100}`}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="report-card glass-panel">
                <div className="report-header">
                  <div>
                    <span className="report-id">{report.id}</span>
                    <h3 className="report-title">{report.title}</h3>
                  </div>
                  <span className={`status-badge ${getStatusClass(report.status)}`}>
                    {report.status}
                  </span>
                </div>
                
                <div className="report-meta">
                  <span className="meta-item"><Calendar size={14} /> {report.date}</span>
                </div>
                
                <p className="report-description">{report.description}</p>
                
                <div className="report-footer">
                  <div className="tags-container">
                    {report.tags.map((tag, idx) => (
                      <span key={idx} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <a href={report.link} download className="read-more-btn">
                    Download Report <Download size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
