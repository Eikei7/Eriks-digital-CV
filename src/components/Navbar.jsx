import { Link } from 'react-router-dom';
import './NavbarStyles.css';

function Navbar () {
  return (
    <nav>
      <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar
