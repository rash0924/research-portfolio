import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, Folder, UserCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/members", label: "Members", icon: <Users size={18} /> },
    { path: "/reports", label: "Reports", icon: <FileText size={18} /> },
    { path: "/documents", label: "Documents", icon: <Folder size={18} /> },
    { path: "/supervisor", label: "Supervisor", icon: <UserCheck size={18} /> },
  ];

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar glass-panel ${isOpen ? 'mobile-open' : ''}`}>
        <div className="nav-brand">
          <Link to="/">
            <h2 className="gradient-text">TEAVISION360</h2>
          </Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
