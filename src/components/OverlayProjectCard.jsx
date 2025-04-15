import React, { useState } from 'react';
import '../pages/ProjectStyles.css';

const OverlayProjectCard = ({ project, openModal }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="overlay-project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="overlay-image" 
        style={{ backgroundImage: `url(${project.image})` }}
        onClick={() => openModal(project.image)}
      >
        <div className={`overlay-content ${hovered ? 'hovered' : ''}`}>
          <h2 className="overlay-title">{project.title}</h2>
          <p className="overlay-description">{project.description}</p>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="overlay-link"
            onClick={(e) => e.stopPropagation()}
          >
            View Live <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayProjectCard;