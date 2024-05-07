import './LandingPageStyles.css'

const LandingPage = () => {
  return (
    <div id='wrapper'>
        <img src='../img/erik.png' alt='Erik Karlsson' />
        <div className='landingBox'>
          <h1 className='landingHeader'>Erik Karlsson</h1>
          <h2 className='landingSubheader'>Frontend Developer Student</h2>
          <p className='landingText'>I make websites. I fiddle with technical things. I love to pick problems or challenges into parts and solve them using logic.</p>
        </div>
    </div>
  )
}

export default LandingPage
