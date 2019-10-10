import React from 'react';

import Split from './Split';

import configurator from '../img/works/configurator.jpg';
import gripper_calculator from '../img/works/gripper_calculator.jpg';

const workList = [
  {
    name: 'configurator',
    link: 'https://young-beach-95006.herokuapp.com/',
    picture: configurator,
    categories: ['javascript', 'react', 'html/css']
  },
  {
    name: 'gripper calculator',
    link: 'https://alexanderpershin.github.io/gripper/',
    picture: gripper_calculator,
    categories: ['demo', 'javascript', 'react', 'html/css', 'design']
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
      <h1 className='heading1 work__heading'>
        <Split>My works</Split>
      </h1>
      <section className='work__content'>{renderList()}</section>
    </div>
  );
};

export default Work;
