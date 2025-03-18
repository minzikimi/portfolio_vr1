import React, { useState, useEffect } from 'react';
import './Intro.css';
import profilePic from '../../assets/img/profile-pic.jpg';

function Intro() {
  const textArray = ["consistent.", "responsible.", "a team player.", "creative.", "detail-oriented."];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 150;
  const erasingSpeed = 75;
  const delayAfterText = 1300;

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayedText.length < textArray[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(textArray[textIndex].substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterText);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(textArray[textIndex].substring(0, displayedText.length - 1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length); 
      }
    }

    return () => clearTimeout(timeout); 
  }, [displayedText, isTyping, textIndex]);

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
