import React from 'react';
import './Intro.css';
import profilePic from '../../assets/img/profile-pic.jpg';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { TYPING_TEXTS, TYPING_CONFIG } from '../../data/constants';

function Intro() {
  const displayedText = useTypingEffect(TYPING_TEXTS, TYPING_CONFIG);

  return (
    <section className="intro" id="home">
      <p className="section-role">Front End Dev</p>
      <h1 className="section-title section-title--intro">
        <strong>MINJI KIM</strong>
      </h1>
      <p className="section-skill section-skill--intro">
        I am <span className="skills-list">{displayedText}</span>
      </p>
      <img src={profilePic} className="intro__img" alt="profile-pic" />
    </section>
  );
}

export default Intro;
