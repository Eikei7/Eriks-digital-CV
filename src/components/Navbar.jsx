import { Link } from 'react-router-dom';
import './NavbarStyles.css';

function Navbar () {
  return (
    <nav>
        <img src="../img/logo.png" alt="E-logo" width="150"/>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar
