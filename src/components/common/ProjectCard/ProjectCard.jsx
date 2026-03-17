import React from 'react';
import './ProjectCard.css';
import arrowIcon from '../../../assets/img/arrow.svg';
import repoIcon from '../../../assets/img/repo.svg';

function ProjectCard({ project }) {
  const { title, description, image, demoLink, githubLink, comingSoon, tags } = project;

  return (
    <div className="portfolio-item">
      <div className="project-content">
        <img src={image} alt={title} className="portfolio__img" />
        
        {tags && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
        
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-links">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
            <img src={arrowIcon} alt="arrow icon" className="icon-arrow" />
            {comingSoon ? 'Live Demo (Coming Soon)' : 'Live Demo'}
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={repoIcon} alt="repo icon" className="icon-repo" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
