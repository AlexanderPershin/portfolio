import React from 'react';

import examplePic from '../img/check_big.png';

const workList = [
  {
    name: 'Example',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  },
  {
    name: 'Example1',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  },
  {
    name: 'Example2',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  },
  {
    name: 'Example3',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  },
  {
    name: 'Example4',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  },
  {
    name: 'Example5',
    link: 'http://google.com',
    picture: examplePic,
    categories: ['demo', 'javascript', 'react']
  }
];

const Work = () => {
  const renderCategories = cat => {
    return cat.map((category, idx) => (
      <span className='work__category' key={idx}>
        {category}
      </span>
    ));
  };

  const renderList = () => {
    return workList.map(({ name, link, picture, categories }) => (
      <div className='work__item' key={name}>
        <figure className='work__base'>
          <img src={picture} alt='' className='work__image' />
          <figcaption className='work__caption'>{name}</figcaption>
        </figure>
        <p className='work__categories'>{renderCategories(categories)}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='work__view'
        >
          view &rarr;
        </a>
      </div>
    ));
  };

  return (
    <div className='work'>
      <h1 className='heading1 work__heading'>My works</h1>
      <section className='work__content'>{renderList()}</section>
    </div>
  );
};

export default Work;
