import React from 'react';
import './Services.css';
import htmlIcon from '../../assets/img/html-5.png';
import csharpIcon from '../../assets/img/c-sharp.png';
import jsIcon from '../../assets/img/js.png';
import cssIcon from '../../assets/img/css-3.png';
import reactIcon from '../../assets/img/react.png';
import nextjsIcon from '../../assets/img/nextjs-icon-svgrepo-com.svg';
import typescriptIcon from '../../assets/img/typescript-icon-svgrepo-com.svg';
import nodejsIcon from '../../assets/img/nodejs-logo-svgrepo-com.svg';
// import flutterIcon from '../../assets/img/flutter-svgrepo-com.svg';
import mongoDbIcon from "../../assets/img/mongodb-logo.svg"
import bookIcon from '../../assets/img/book-svgrepo-com.svg';
import appleIcon from '../../assets/img/apple-svgrepo-com.svg';
import tailwindIcon from "../../assets/img/tailwind.svg"
import figmaIcon from "../../assets/img/figma-svgrepo-com.svg";
import visualstudioIcon from "../../assets/img/visual-studio-svgrepo-com.svg"
import gitIcon from "../../assets/img/git-svgrepo-com.svg";
import visualstudiocodeIcon from "../../assets/img/visual-studio-code-svgrepo-com.svg";

function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section-title section-title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>User-Focused Front-End Development</h3>
          <p>I create intuitive and engaging user interfaces. My background in communication and hospitality allows me to anticipate user needs and deliver exceptional digital experiences.</p>
          <div className="skills-icons">
            <img src={htmlIcon} className="skills-icon" alt="html-icon" />
            <img src={csharpIcon} className="skills-icon" alt="c-sharp-icon" />
            <img src={jsIcon} className="skills-icon" alt="javascript-icon" />
            <img src={cssIcon} className="skills-icon" alt="css-icon" />
            <img src={reactIcon} className="skills-icon" alt="react-icon" />
            {/* <p>in training..</p> */}
            <img src={nextjsIcon} className="skills-icon" alt="next-icon" />
            <img src={typescriptIcon} className="skills-icon" alt="typescript-icon" />
            <img src={nodejsIcon} className="skills-icon" alt="nodejs-icon" />
            <img src={mongoDbIcon} className="skills-icon" alt="mongodb-icon" />
            <img src={tailwindIcon} className="skills-icon" alt="mongodb-icon" />
            <img src={figmaIcon} className="skills-icon" alt="mongodb-icon" />
            <img src={visualstudioIcon} className="skills-icon" alt="mongodb-icon" />
            <img src={visualstudiocodeIcon} className="skills-icon" alt="mongodb-icon" />
            <img src={gitIcon} className="skills-icon" alt="mongodb-icon" />
          </div>
        </div>
        <div className="service">
          <h3>Adaptable and Eager Learner</h3>
          <p>I'm committed to continuous learning and staying up-to-date with the latest front-end technologies, always ready to tackle new challenges.</p>
          <div className="skills-icons">
            <img src={bookIcon} className="learner-icon" alt="book-icon" />
            <img src={appleIcon} className="learner-icon" alt="apple-icon" />
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
