import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { TYPING_TEXTS, TYPING_CONFIG } from '../data/constants';

function Home() {
  const displayedText = useTypingEffect(TYPING_TEXTS, TYPING_CONFIG);

  return (
    <div className="home-page">
      <div className="home-content">
        <p className="home-role">Full-Stack Developer</p>
        <h1 className="home-name">MINJI KIM</h1>
        <p className="home-typing">
          <span className="typing-text">{displayedText}</span>
        </p>
        
        <nav className="home-nav">
          <Link to="/projects" className="home-nav-link">Projects</Link>
          <Link to="/about" className="home-nav-link">About</Link>
          <Link to="/contact" className="home-nav-link">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
