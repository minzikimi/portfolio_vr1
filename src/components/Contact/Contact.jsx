import React from 'react';
import './Contact.css';
import githubIcon from '../../assets/img/icons8-github.svg';
import linkedinIcon from '../../assets/img/icons8-linkedin.svg';
import instagramIcon from '../../assets/img/icons8-instagram-96.svg';

function Contact() {
  return (
    <section className="contact-me" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <br />
      <p>
        I am currently seeking <span>internship</span> opportunities for 2025.
        <br />
        Feel free to reach out if you'd like to connect!
      </p>
      <p className="email-link">
        <a href="mailto:minji.kim@hyperisland.se">minji.kim@hyperisland.se</a>
      </p>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/minzikimi" target="_blank" rel="noopener noreferrer">
            <img className="icons" src={githubIcon} alt="github-icon" />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/minji-kim-185a80315/" target="_blank" rel="noopener noreferrer">
            <img className="icons" src={linkedinIcon} alt="linkedin-icon" />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.instagram.com/minziikim/" target="_blank" rel="noopener noreferrer">
            <img className="icons" src={instagramIcon} alt="instagram-icon" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
