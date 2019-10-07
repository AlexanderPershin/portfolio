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
    body: 'I know JavaScript, React/Redux and Express/MongoDB for backend'
  },
  {
    label: 'Design',
    body:
      'I can create website design from scratch using sheet of paper, Adobe XD, Illustrator and Photoshop'
  }
];

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='heading1'>My skills:</h1>
      <Accordeon list={skillsList} />
    </div>
  );
};

export default Skills;
