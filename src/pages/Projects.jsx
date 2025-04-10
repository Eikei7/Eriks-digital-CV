// Projects.jsx
import React, { useState } from 'react';
import DataComponent from '../components/DataComponent';
import './ProjectStyles.css';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const projects = [
    {
      title: "Solaris",
      url: "https://eikei7.github.io/Individuell-Examination-Solaris/",
      image: "img/solaris.png",
      description: "A small school project in Swedish showing the solar system. It uses Fetch API and features searchable planets."
    },
    {
      title: "Beepbox Covers",
      url: "https://erik-beepbox.netlify.app/",
      image: "img/beepbox.png",
      description: "A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget component for playing both my cover and the original song in Spotify."
    }
  ];

  return (
    <div className='projects-container'>
      <h2 className='projects-title'>Some web projects of mine:</h2>
      
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='project-header'>
              <h2 className='project-title'>{project.title}</h2>
              <a 
                href={project.url} 
                target='_blank' 
                rel="noopener noreferrer"
                className='project-link'
              >
                View Project <span className='arrow'>→</span>
              </a>
            </div>
            
            <div className='project-image-container'>
              <img
                src={project.image}
                alt={project.title}
                onClick={() => openModal(project.image)}
                className="project-image"
              />
              <div className='image-overlay'>
                <span>Click to enlarge</span>
              </div>
            </div>
            
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <img src={currentImage} alt="Large version" className="modal-image" />
          </div>
        </div>
      )}

      <DataComponent />
    </div>
  );
}

export default Projects;