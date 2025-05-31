// Projects.jsx
import { useState } from 'react';
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
      title: "MusiQuiz",
      url: "https://musi-quiz.netlify.app/",
      image: "img/musiquiz.png",
      description: "A full-stack degree project for school. Challenge a friend to a music quiz! Backend using AWS Lambda and DynamoDB, and frontend with React/Vite."
    },
    {
      title: "Solaris",
      url: "https://eikei7.github.io/Individuell-Examination-Solaris/",
      image: "img/solaris.png",
      description: "A small school project in Swedish showing the solar system. It uses Fetch API and features searchable planets."
    },
    {
      title: "Weather Dashboard",
      url: "https://eriks-weather-dashboard.netlify.app/",
      image: "img/weather.png",
      description: "A weather dashboard which uses OperWeatherMap API to display weather information."
    },
    {
      title: "Beepbox Covers",
      url: "https://erik-beepbox.netlify.app/",
      image: "img/beepbox.png",
      description: "A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget component for playing both my cover and the original song in Spotify."
    }
  ];

  const videoProjects = [
    {
      id: "ixHAfx7IQEY",
      title: "Birabuto Kingdom - Super Mario Land 2",
      description: "A cover of the Birabuto Kingdom theme from Super Mario Land 2, made in BeepBox."
    },
    {
      id: "Cz3iBitQFoc",
      title: "Playing birdsong on Alexa speakers using ESP32+RFID",
      description: "A microcontroller project where I scan tags underneath Decobirds to play their call on a smart speaker."
    }
  ];

  return (
    <div className='projects-container'>
      <h2 className='projects-title'>Some live web projects of mine</h2>
      
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
      
      <section className="video-projects-section">
        <h2 className='projects-title'>Other Projects</h2>
        <div className="video-projects-grid">
          {videoProjects.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;