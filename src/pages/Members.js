import React from 'react';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import './Members.css';

import { membersData } from '../data/members';

const Members = () => {
  return (
    <div className="members-container animate-fade-in">
      <div className="page-header">
        <h1 className="gradient-text">Research Team</h1>
        <p className="page-subtitle">The brilliant minds driving the TEAVISION360 initiative forward.</p>
      </div>

      <div className="members-grid">
        {membersData.map((member, index) => (
          <div key={member.id} className={`member-card glass-panel delay-${(index % 3 + 1) * 100}`}>
            <div className="avatar-container">
              <img src={member.avatar} alt={member.name} className="avatar" />
              <div className="avatar-ring"></div>
            </div>
            <h3 className="member-name">{member.name}</h3>
            <span className="member-role">{member.role}</span>
            <p className="member-bio">{member.bio}</p>
            <div className="member-socials">
              <a href={`mailto:${member.id}@sliit.lk`} className="social-icon" title="Email"><Mail size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><Globe size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><MessageSquare size={18} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
