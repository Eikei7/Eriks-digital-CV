import React from 'react'
import './FooterStyles.css'
import RandomQuoteComponent from './RandomQuoteComponent'

const Footer = () => {
  return (
    <div className='footerBox'>
      <a href="https://www.instagram.com/frontend_erik/" target="_blank"><img src="./img/instagram-128.png" width="100" height="100" alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/erik-karlsson7/" target="_blank"><img src="./img/linkedin-128.png" width="100" height="100" alt="LinkedIn" /></a>
      <a href="https://github.com/Eikei7" target="_blank"><img src="./img/github-128.png" width="100" height="100" alt="GitHub" /></a>

    </div>
  )
}

export default Footer
