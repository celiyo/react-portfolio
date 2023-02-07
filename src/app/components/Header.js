import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand logo' to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <nav className='collapse navbar-collapse flex-grow-1' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto flex-nowrap'>
            <li className='nav-item'>
              <NavLink
                to='/'
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/projects'
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
