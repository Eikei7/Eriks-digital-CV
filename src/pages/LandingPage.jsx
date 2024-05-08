import './LandingPageStyles.css'

const LandingPage = () => {
  return (
    <div id='wrapper'>
        <img src='../img/erik_headshot.png' alt='Erik Karlsson' width="400"/>
        <div className='landingBox'>
          <h1 className='landingHeader'>Erik Karlsson</h1>
          <h2 className='landingSubheader'>Frontend Developer Student</h2>
          <p className='landingText'>I create web apps. I tinker with electronics.</p>
        </div>
    </div>
  )
}

export default LandingPage
