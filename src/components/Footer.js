import React from 'react';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="gradient-text">TEAVISION360</h2>
          <p>An integrated AI and IoT platform designed for automation and optimization of key decision-making processes in the Sri Lankan tea industry.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/members">Research Team</a></li>
            <li><a href="/full-research">Full Research</a></li>
            <li><a href="/reports">Reports & Downloads</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><Mail size={20} /></a>
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><MessageSquare size={20} /></a>
          </div>
          <p className="university-text">Sri Lanka Institute of Information Technology (SLIIT)</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 TEAVISION360 Research Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
