import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footerBox'>
      <div className='footerContent'>
        <p className='footerCopyright'>© {currentYear} Erik Karlsson</p>
        
        <div className='footerSocial'>
          <a 
            href="https://www.instagram.com/frontend_erik/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="./img/instagram-128.png" alt="Instagram" />
          </a>
          <a 
            href="https://www.linkedin.com/in/erik-karlsson7/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="./img/linkedin-128.png" alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/Eikei7" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="./img/github-128.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;