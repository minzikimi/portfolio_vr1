import React from 'react';
import './About.css'
import profilePic2 from '../../assets/img/profile2.jpeg';

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section-title section-title--about">Who I am</h2>
      <p className="section-subtitle section-subtitle--about">Front end developer based in Sweden</p>
      <div className="about-me__body">
        <p>안녕하세요 Born in Busan, South Korea currently based in Sweden. My journey with programming began in 2023, and I quickly discovered my passion for web development. Currently, I'm deepening my skills at Hyper Island in Stockholm.</p>
      </div>

        <img src={profilePic2} className="about-me__img" alt="profile-pic" />
      
    </section>
  );
}

export default About;