import React from 'react';

const socialList = [
  {
    name: 'facebook',
    icon: 'fab fa-facebook-f',
    link: 'https://web.facebook.com/alexander.pershin.125'
  },
  {
    name: 'vk',
    icon: 'fab fa-vk',
    link: 'https://vk.com/id409604155'
  },
  {
    name: 'telegram',
    icon: 'fab fa-telegram-plane',
    link: 'https://t.me/AlexanderPershin'
  }
];

const Footer = () => {
  const renderSocials = () => {
    return socialList.map(item => (
      <a
        className='footer__social'
        key={item.name}
        href={item.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className={item.icon}></i>
      </a>
    ));
  };

  return (
    <footer className='footer'>
      <div className='footer__socials'>{renderSocials()}</div>
      &copy; All rights reserved {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
