import React from 'react';
import { Award, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import './Supervisor.css';

const Supervisor = () => {
  return (
    <div className="supervisor-container animate-fade-in">
      <div className="page-header">
        <h1 className="gradient-text">Project Supervisors</h1>
      </div>

      <div className="supervisor-card glass-panel" style={{ marginBottom: '2rem' }}>
        <div className="supervisor-layout">
          <div className="supervisor-image-col delay-100">
            <div className="supervisor-avatar-container">
              <img 
                src="/images/supervisor.jpeg" 
                alt="Ms. Dushanthi Kuruppu" 
                className="supervisor-avatar"
              />
              <div className="glow-effect"></div>
            </div>
          </div>
          
          <div className="supervisor-content-col delay-200">
            <h2 className="supervisor-name">Ms. Dushanthi Kuruppu</h2>
            <h3 className="supervisor-title">Project Supervisor</h3>
            <div className="supervisor-location">
              <MapPin size={16} /> Sri Lanka Institute of Information Technology (SLIIT)
            </div>
            
            <div className="supervisor-bio">
              <p>
                Ms. Dushanthi Kuruppu provided invaluable guidance, continuous support, and encouragement throughout the research project development process.
              </p>
              <p>
                Her expertise was crucial in shaping the research direction and ensuring the successful achievement of the study's primary objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="supervisor-card glass-panel" style={{ marginTop: '3rem' }}>
        <div className="supervisor-layout" style={{ flexDirection: 'row-reverse' }}>
          <div className="supervisor-image-col delay-200">
            <div className="supervisor-avatar-container" style={{ borderColor: 'var(--accent-secondary)' }}>
              <img 
                src="https://i.pravatar.cc/300?u=chathurya" 
                alt="Ms. Chathurya Kumarapperuma" 
                className="supervisor-avatar"
              />
              <div className="glow-effect" style={{ background: 'var(--accent-secondary)' }}></div>
            </div>
          </div>
          
          <div className="supervisor-content-col delay-300">
            <h2 className="supervisor-name">Ms. Chathurya Kumarapperuma</h2>
            <h3 className="supervisor-title">Co-Supervisor</h3>
            <div className="supervisor-location">
              <MapPin size={16} /> Sri Lanka Institute of Information Technology (SLIIT)
            </div>
            
            <div className="supervisor-bio">
              <p>
                Ms. Chathurya Kumarapperuma served as the co-supervisor, offering vital feedback and technical research guidance.
              </p>
              <p>
                Her unwavering support helped the team navigate complex implementations and validate the proposed AI and IoT solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Supervisor;
