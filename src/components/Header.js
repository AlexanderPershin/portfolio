import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

import Logo from './Logo';
import MenuBtn from './MenuBtn';

const Header = props => {
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = e => {
    e.stopPropagation();
    return menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  const handleClick = e => {
    if (
      e.target.className.animVal === 'menu__btnPath' ||
      e.target.className.animVal === 'menu__btn' ||
      e.target.className === 'menu__btn'
    ) {
      e.stopPropagation();
      setMenuActive(true);
    } else {
      e.stopPropagation();
      setMenuActive(false);
    }
  };

  const renderMenu = () => {
    if (menuActive) {
      return (
        <div className='menu__wrapper'>
          <ul className='header__menu'>
            <li className='header__item'>
              <NavLink
                exact
                onClick={toggleMenu}
                className='header__link'
                activeClassName='-active'
                to='/'
              >
                main
              </NavLink>
            </li>
            <li className='header__item'>
              <NavLink
                onClick={toggleMenu}
                className='header__link'
                activeClassName='-active'
                to='/contact'
              >
                contact
              </NavLink>
            </li>
            <li className='header__item'>
              <NavLink
                onClick={toggleMenu}
                className='header__link'
                activeClassName='-active'
                to='/skills'
              >
                skills
              </NavLink>
            </li>
            <li className='header__item'>
              <NavLink
                onClick={toggleMenu}
                className='header__link'
                activeClassName='-active'
                to='/work'
              >
                work
              </NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      return <MenuBtn />;
    }
  };

  return (
    <nav className='header'>
      <Link className='header__logo' to='/'>
        <Logo />
      </Link>

      {renderMenu()}
    </nav>
  );
};

export default Header;
