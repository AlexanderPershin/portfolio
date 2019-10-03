import React from 'react';

import Accordeon from './Accordeon';

const skillsList = [
  {
    label: 'Html/CSS',
    body:
      'I create responsive websites using CSS grid, flexbox and media queries. I also use SCSS preprocessor'
  },
  {
    label: 'JavaScript',
    body: 'I know JavaScript, React/Redux and Express and MongoDB for backend'
  },
  {
    label: 'Design',
    body:
      'I can create website design from scratch using Adobe XD, Illustrator and Photoshop'
  }
];

const Skills = () => {
  return (
    <div className='skills'>
      <Accordeon list={skillsList} />
    </div>
  );
};

export default Skills;
