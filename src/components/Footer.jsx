import React from 'react'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footerBox'>
      <div className='footerSocial'>
      <a href="https://www.instagram.com/frontend_erik/" target="_blank"><img src="./img/instagram-128.png" alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/erik-karlsson7/" target="_blank"><img src="./img/linkedin-128.png" alt="LinkedIn" /></a>
      <a href="https://github.com/Eikei7" target="_blank"><img src="./img/github-128.png" alt="GitHub" /></a>
      </div>
    </div>
  )
}

export default Footer
