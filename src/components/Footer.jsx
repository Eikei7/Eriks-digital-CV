import React from 'react'
import './FooterStyles.css'
import RandomQuoteComponent from './RandomQuoteComponent'

const Footer = () => {
  return (
    <div className='footerBox'>
      <img src="./img/instagram-128.png" width="100" height="100" alt="Instagram" />
      <img src="./img/linkedin-128.png" width="100" height="100" alt="LinkedIn" />
      <img src="./img/github-128.png" width="100" height="100" alt="GitHub" />

    </div>
  )
}

export default Footer
