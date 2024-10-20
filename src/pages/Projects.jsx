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

  return (
    <div className='projectsBox'>
      <h2 className='landingSubheader'>Some web projects of mine:</h2>
      <div className='projectsList'>
      
        <div className='project'>
          <a href="https://eikei7.github.io/Individuell-Examination-Solaris/" target='_blank' rel="noopener noreferrer">
            <h2>Solaris</h2>
          </a>
          <img 
            src="img/solaris.png" 
            width="300px" 
            alt="Solaris" 
            onClick={() => openModal("img/solaris.png")} 
            className="project-image"
          />
          <p className='description'>A small school project in Swedish showing the solar system. It uses Fetch API and features searchable planets.</p>
        </div>

        <div className='project'>
          <a href="https://erik-beepbox.netlify.app/" target="_blank" rel="noopener noreferrer">
          <h2>Beepbox Portfolio</h2>
          </a>
          <img 
            src="img/beepbox.png" 
            width="300px" 
            alt="Beepbox" 
            onClick={() => openModal("img/beepbox.png")} 
            className="project-image"
          />
          <p className='description'>A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget component for playing both my cover and the original song in Spotify.</p>
        </div>
        
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={currentImage} alt="Large version" className="modal-image" />
          </div>
        </div>
      )}

      <DataComponent />
    </div>
  );
}

export default Projects;

