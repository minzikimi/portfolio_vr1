import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { NAV_LINKS } from '../../data/constants';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => setIsNavOpen(false);

  return (
    <header className={isNavOpen ? 'nav-open' : ''}>
      <Link to="/" className="logo-link">
        <div className="logo">MK</div>
      </Link>
      
      <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
        <span className="hamburger"></span>
      </button>
      
      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link 
              to="/" 
              className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/projects" 
              className={`nav__link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={closeNav}
            >
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/about" 
              className={`nav__link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/contact" 
              className={`nav__link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
