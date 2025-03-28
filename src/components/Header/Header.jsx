import React, { useState } from 'react';
import './Header.css';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => setIsNavOpen(false);

  return (
    <header className={isNavOpen ? 'nav-open' : ''}>
      <div className="logo">
        {/* logo  */}
      </div>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link" onClick={closeNav}>Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link" onClick={closeNav}>What I do</a></li>
          <li className="nav__item"><a href="#about" className="nav__link" onClick={closeNav}>Who I am</a></li>
          <li className="nav__item"><a href="#work" className="nav__link" onClick={closeNav}>My Work</a></li>
          <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeNav}>Contact me</a></li>
        </ul>
      </nav>
      {/* <ThemeToggle /> */}
    </header>
  );
}

export default Header;
