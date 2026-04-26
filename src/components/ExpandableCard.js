import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './ExpandableCard.css';

const ExpandableCard = ({ title, children, delay = "100", titleColor = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`detail-card glass-panel delay-${delay} ${isOpen ? 'is-open' : ''}`}>
      <div className="section-header clickable" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-title-group">
          <h3 style={titleColor ? { color: titleColor } : {}}>{title}</h3>
          <div className="divider" style={titleColor ? { background: `linear-gradient(90deg, ${titleColor}, transparent)` } : {}}></div>
        </div>
        <div className={`expand-icon ${isOpen ? 'rotate' : ''}`}>
          <ChevronDown size={24} />
        </div>
      </div>
      <div className={`section-content ${isOpen ? 'show' : 'hide'}`}>
        {children}
      </div>
    </div>
  );
};

export default ExpandableCard;
