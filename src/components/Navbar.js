import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar glass-panel">
        <div className="nav-brand">
          <Link to="/">
            <h2 className="gradient-text">TEAVISION360</h2>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Members
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/documents" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Documents
            </NavLink>
          </li>
          <li>
            <NavLink to="/supervisor" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Supervisor
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
