import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import Logo from './Logo';

const Header = () => {
  return (
    <nav className='header'>
      <Link className='header__logo' to='/'>
        <Logo />
      </Link>

      <ul className='header__menu'>
        <li className='header__item'>
          <NavLink
            className='header__link'
            activeClassName='-active'
            to='/contact'
          >
            contact
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink
            className='header__link'
            activeClassName='-active'
            to='/skills'
          >
            skills
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink
            className='header__link'
            activeClassName='-active'
            to='/work'
          >
            work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
