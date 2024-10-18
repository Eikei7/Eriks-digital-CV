import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import Icon from '@mdi/react';
import { mdiBriefcaseOutline, mdiHomeVariantOutline, mdiEmailOutline, mdiAccountTieOutline } from '@mdi/js';
import DarkModeButton from './DarkModeButton';

function Navbar () {
  return (
    <nav>
        <img src="./img/e-k-logo.png" alt="EK-logo" width="100"/>
        <Link to='/'>
        <button className="button" role="button">
        <Icon path={mdiHomeVariantOutline} size={1.4} />
        Home</button>
        </Link>
        <Link to='/projects'>
        <button className="button" role="button">
        <Icon path={mdiBriefcaseOutline} size={1.4} />
        Projects</button>
        </Link>
        <Link to='/aboutme'>
        <button className="button" role="button">
        <Icon path={mdiAccountTieOutline} size={1.4} />
        About me</button>
        </Link>          
        <Link to='/contact'>
        <button className="button" role="button">
        <Icon path={mdiEmailOutline} size={1.4} />
        Contact</button>
        </Link>
        <DarkModeButton />
    </nav>
  )
}

export default Navbar
