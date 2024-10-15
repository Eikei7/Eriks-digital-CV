import './LandingPageStyles.css'
import Icon from '@mdi/react';
import { mdiMicrosoftWindows, mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiHomeAssistant, mdiLanguageHtml5 } from '@mdi/js';

const LandingPage = () => {
  return (
    <div id='wrapper'>
        <img src="./img/erik_headshot.png" alt='Erik Karlsson' width="400"/>
        <div className='landingBox'>
          <h1 className='landingHeader'>Erik Karlsson</h1>
          <h2 className='landingSubheader'>Frontend Developer</h2>
          <p className='landingText'>I create web apps and I tinker with electronics.<br /><br />I feel confident in using the following web technologies and systems:</p>
          <div className="tooltip">
          <Icon path={mdiLanguageHtml5} className="svg-icon" color="var(--steelblue)" />
          <span class="tooltiptext">HTML5</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiLanguageCss3} className="svg-icon" color="var(--steelblue)"/>
          <span class="tooltiptext">CSS3</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiLanguageJavascript} className="svg-icon" color="var(--steelblue)"/>
          <span class="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
          <Icon path={mdiReact} className="svg-icon" color="var(--steelblue)"/>
          <span class="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <Icon path={mdiHomeAssistant} className="svg-icon" color="var(--steelblue)"/>
            <span class="tooltiptext">Home Assistant</span>
          </div>
          <div className="tooltip">
            <Icon path={mdiMicrosoftWindows} className="svg-icon" color="var(--steelblue)"/>
            <span class="tooltiptext">Windows 10</span>
          </div>
          <div className="tooltip">
          <svg fill="#415A77" className="svg-icon"  viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
            <span class="tooltiptext">Figma</span>
          </div>
        </div>
        
    </div>
  )
}

export default LandingPage
