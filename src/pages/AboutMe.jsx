import './AboutMeStyles.css'

const AboutMe = () => {

  return (
    <div id='aboutmeWrapper'>
      <div className='aboutmeBox'>
      <h2 className='landingsubHeader'>So who's Erik then?</h2>
      <p>I was born in the year when the <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank">Live Aid concerts</a> took place, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank">Microsoft's Windows 1.0</a> was released and <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank">Super Mario Bros.</a> on the NES was available in shops.</p>
      <div className='aboutmeImgWrapper'>
      <img src="img/windows1.png" width="45%"/>
      <img src="img/mario-nes.jpg" width="35%"/>
      </div>
      <p>I chose these three events from my birth year for a reason. The reason being that, apart from growing up using Windows, I also love retro video games and music. Music is something I simply can't
        go without. I could talk for days about The Beatles' divine albums or John Mayer's incredible guitar playing, but that's not what this section was intended for.</p>
        <p>I'd say I'm a 'seasoned' computer and Internet user. I've experienced the web since the time of dial-up modems. I was 13 years old when I built my <em>very own</em> HTML-only website about myself, complete with animated GIFs and marquee texts, hosted at Angelfire.com (remember those guys?).</p>
        <p>Right around this time (circa 1998 - 2000) I also quickly grew an interest in computers and the technology behind them. On the hardware side for example, I learnt how graphics cards and RAM sticks worked, and practiced swapping them out for newer components on our shared family computer. Eventually I saved up for a video capture card, which allowed me to put our recorded family holiday videos onto the computer, and that's when
          my interest in multimedia and graphics began.</p>
    </div>
  </div>
  )
}

export default AboutMe
