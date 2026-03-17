import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from '../components/common/ProjectCard/ProjectCard';
import { webProjects } from '../data/projects';

function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? webProjects 
    : webProjects.filter(project => project.tags.includes(filter));

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Full-stack applications & experiments</p>
      </div>

      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'Full-Stack' ? 'active' : ''}`}
          onClick={() => setFilter('Full-Stack')}
        >
          Full-Stack
        </button>
        <button 
          className={`filter-btn ${filter === 'Frontend' ? 'active' : ''}`}
          onClick={() => setFilter('Frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'API' ? 'active' : ''}`}
          onClick={() => setFilter('API')}
        >
          API Integration
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
