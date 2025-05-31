import { useRef } from 'react';
import './LandingPageStyles.css';
import Icon from '@mdi/react';
import { 
  mdiMicrosoftWindows, 
  mdiReact, 
  mdiLanguageJavascript, 
  mdiLanguageCss3, 
  mdiHomeAssistant, 
  mdiLanguageHtml5, 
  mdiAws, 
  mdiNodejs, 
  mdiWordpress,
  mdiPlex,
  mdiMicrosoftVisualStudioCode,
  mdiLambda
} from '@mdi/js';
import Contact from './Contact';

const LandingPage = () => {
  
  const techSkills = [
    { icon: mdiLanguageHtml5, name: 'HTML' },
    { icon: mdiLanguageCss3, name: 'CSS' },
    { icon: mdiLanguageJavascript, name: 'JavaScript' },
    { icon: mdiReact, name: 'React' },
    { icon: mdiNodejs, name: 'Node.js' },
    { icon: mdiAws, name: 'AWS' },
    { icon: mdiLambda, name: 'Lambda' },
    { icon: mdiMicrosoftVisualStudioCode, name: 'VS Code' },
    { icon: mdiWordpress, name: 'WordPress' },
    { icon: mdiHomeAssistant, name: 'Home Assistant' },
    { 
      svg: (
        <svg fill="currentColor" viewBox="0 0 25 25" role="img" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
        </svg>
      ), 
      name: 'Figma' 
    },
    { icon: mdiMicrosoftWindows, name: 'Windows' },
    { icon: mdiPlex , name: 'Plex' },
  ];

  return (
    <>
      <div className="landing-container">
        <div className="landing-content">       
          <div className="info-section">
            <div className="info-card">
              <h1 className="name-heading">Erik Karlsson</h1>
              <h2 className="title-heading">Frontend developer, tech nerd and music lover</h2>
              <div className="about-text">
                <p>I'm a creative person who loves anything tech and web related. I also have a fond interest of all kinds of music.</p>
                <p>I know my way around the following web technologies and systems:</p>
              </div>
              <div className="skills-grid">
                {techSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-icon">
                      {skill.icon ? (
                        <Icon path={skill.icon} size={1.9} />
                      ) : (
                        skill.svg
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="scroll-indicator"></div>
        </div>
      </div>
      
      <div>
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;