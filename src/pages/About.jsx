import React from 'react';
import './About.css';
import profilePic from '../assets/img/profile2.jpeg';

function About() {
  const frontendSkills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'
  ];

  const backendSkills = [
    '.NET', 'C#', 'ASP.NET Core', 'Node.js', 'Express', 'RESTful APIs'
  ];

  const databaseSkills = [
    'SQL', 'MongoDB', 'PostgreSQL', 'Entity Framework'
  ];

  const toolsSkills = [
    'Git', 'GitHub', 'Visual Studio', 'VS Code', 'Figma', 'Postman'
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Full-Stack Developer based in Sweden</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            안녕하세요 Born in Busan, South Korea, currently based in Sweden.
          </p>
          
          <p>
            I'm a developer transitioning into full-stack development with a focus on .NET technologies. 
            I build web applications from frontend to backend, currently expanding my expertise in C#, 
            ASP.NET Core, and database design while maintaining strong frontend skills.
          </p>

          <p>
            My journey in tech began in 2023. I completed my studies at Hyper Island in Stockholm 
            and gained hands-on experience in software development and AI engineering as an intern at TUI.
          </p>

          <div className="skills-section">
            <h2 className="skills-title">Frontend Development</h2>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">Backend Development</h2>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">Database & ORM</h2>
            <div className="skills-grid">
              {databaseSkills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">Tools & Version Control</h2>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={profilePic} alt="Minji Kim" />
        </div>
      </div>
    </div>
  );
}

export default About;
