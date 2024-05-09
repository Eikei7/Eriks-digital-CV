import './LandingPageStyles.css'
import Icon from '@mdi/react';
import { mdiPlex, mdiMicrosoftWindows, mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiHomeAssistant, mdiLanguageHtml5 } from '@mdi/js';

const LandingPage = () => {
  return (
    <div id='wrapper'>
        <img src='../img/erik_headshot.png' alt='Erik Karlsson' width="400"/>
        <div className='landingBox'>
          <h1 className='landingHeader'>Erik Karlsson</h1>
          <h2 className='landingSubheader'>Frontend Developer Student</h2>
          <p className='landingText'>I create web apps and I tinker with electronics.<br /><br />I feel confident in using the following web techniques and systems:</p>
          <div className="tooltip">
          <Icon path={mdiLanguageHtml5} size={2.7} color="var(--steelblue)" />
          <span class="tooltiptext">HTML5</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiLanguageCss3} size={2.7} color="var(--steelblue)"/>
          <span class="tooltiptext">CSS3</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiLanguageJavascript} size={2.7} color="var(--steelblue)"/>
          <span class="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiReact} size={2.7} color="var(--steelblue)"/>
          <span class="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <Icon path={mdiHomeAssistant} size={2.7} color="var(--steelblue)"/>
            <span class="tooltiptext">Home Assistant</span>
          </div>
          <div className="tooltip">
            <Icon path={mdiMicrosoftWindows} size={2.7} color="var(--steelblue)"/>
            <span class="tooltiptext">Windows 10</span>
          </div>
          <div className="tooltip">
            <Icon path={mdiPlex} size={2.7} color="var(--steelblue)"/>
            <span class="tooltiptext">Plex</span>
          </div>
        </div>
        
    </div>
  )
}

export default LandingPage
