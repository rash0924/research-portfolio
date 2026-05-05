import React from 'react';
import { Mail, Phone, Link } from 'lucide-react';
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

            {/* Contact Actions */}
            <div className="contact-actions">
              <a
                href={`mailto:${member.email}`}
                className="contact-btn contact-btn-email"
                title={`Email ${member.name}`}
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href={`tel:${member.phone}`}
                className="contact-btn contact-btn-phone"
                title={`Call ${member.name}`}
              >
                <Phone size={16} />
                <span>Call</span>
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-linkedin"
                title={`LinkedIn Profile`}
              >
                <Link size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Contact Details (subtle reveal) */}
            <div className="contact-details">
              <a href={`mailto:${member.email}`} className="contact-detail-link">
                <Mail size={14} />
                <span>{member.email}</span>
              </a>
              <a href={`tel:${member.phone}`} className="contact-detail-link">
                <Phone size={14} />
                <span>{member.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
