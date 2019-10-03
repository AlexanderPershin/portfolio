import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import Logo from './Logo';
import MenuBtn from './MenuBtn';

const Header = props => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [menuActive]);

  const toggleMenu = e => {
    e.stopPropagation();
    return menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  const handleClick = e => {
    console.log(e.target.id);

    if (
      e.target.id === 'menu' ||
      e.target.id === 'menu1' ||
      e.target.id === 'menu2' ||
      e.target.id === 'menu3'
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
        <CSSTransition
          classNames='go'
          in={menuActive}
          appear
          unmountOnExit
          timeout={300}
        >
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
        </CSSTransition>
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
      <MenuBtn />
      <CSSTransition
        classNames='go'
        in={menuActive}
        unmountOnExit
        timeout={1000}
      >
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
      </CSSTransition>
    </nav>
  );
};

export default Header;
