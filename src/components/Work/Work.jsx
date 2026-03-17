import React from 'react';
import './Work.css';
import ProjectCard from '../common/ProjectCard/ProjectCard';
import { webProjects } from '../../data/projects';

function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section-title section-title--work">My work</h2>
      <p className="section-subtitle section-subtitle--work">Some of my projects</p>
      <div className="portfolio-list">
        {webProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Work;
