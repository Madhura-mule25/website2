
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CyberBuddy
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tips" className="nav-links">
              Tips
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz" className="nav-links">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/safety" className="nav-links">
              Safety & Security
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cyberbullying" className="nav-links">
              Cyberbullying
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/prevention" className="nav-links">
              Prevention
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
