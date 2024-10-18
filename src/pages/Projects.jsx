import React from 'react'
import DataComponent from '../components/DataComponent'
import './ProjectStyles.css'

const Projects = () => {
  return (
    <div className='projectsBox'>
      <h1>Some web projects of mine:</h1>
      <div className='projectsList'>
      
      <div className='project'>
        <a href="https://eikei7.github.io/Individuell-Examination-Solaris/" target='_blank'><h2>Solaris</h2></a>
        <img src="img/solaris.png" width="300px" alt="Solaris" />
        <p>A small school project in Swedish showing the solar system. It uses Fetch API and features searchable planets.</p>
      </div>
      <div className='project'>
        <h2>Beepbox Portfolio</h2>
        <img src="img/beepbox.png" width="300px" alt="Beepbox" />
        <p>A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget for playing both my cover and the original song in Spotify.</p>
      </div>
      </div>
      <DataComponent />
    </div>
  )
}

export default Projects
