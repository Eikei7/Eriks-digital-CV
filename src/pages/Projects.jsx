// Projects.jsx
import React, { useState } from 'react';
import DataComponent from '../components/DataComponent';
import './ProjectStyles.css';
import OverlayProjectCard from '../components/OverlayProjectCard';

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
      title: "Nintendo Switch Game Tracker",
      url: "#",
      image: "img/switch-game-library.png",
      description: "A simple project which lists your Switch games and checks if they need an update."
    },
    {
      title: "Solaris",
      url: "https://eikei7.github.io/Individuell-Examination-Solaris/",
      image: "img/solaris.png",
      description: "A small school project in Swedish showing the solar system. It uses Fetch API and features searchable planets."
    },
    {
      title: "MusiQuiz",
      url: "#",
      image: "img/musiquiz.png",
      description: "A full-stack degree project for school. "
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
      <h2 className='projects-title'>Some live web projects of mine:</h2>
      
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <OverlayProjectCard 
            key={index}
            project={project}
            openModal={openModal}
          />
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