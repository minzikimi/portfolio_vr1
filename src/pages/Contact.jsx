import React from 'react';
import './Contact.css';
import githubIcon from '../assets/img/icons8-github.svg';
import linkedinIcon from '../assets/img/icons8-linkedin.svg';

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Let's build something great together</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-section">
            <h2>Email</h2>
            <a href="mailto:minji.kim@hyperisland.se" className="contact-link">
              minji.kim@hyperisland.se
            </a>
          </div>

          <div className="contact-section">
            <h2>Location</h2>
            <p>Sweden</p>
          </div>

          <div className="contact-section">
            <h2>Availability</h2>
            <p>Open to new opportunities and collaborations</p>
          </div>
        </div>

        <div className="contact-social">
          <h2>Connect</h2>
          <div className="social-links">
            <a 
              href="https://github.com/minzikimi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={githubIcon} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/minji-kim-185a80315/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
