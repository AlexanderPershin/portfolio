import React from 'react';

const ChevRight = props => {
  return (
    <svg
      onClick={props.goTo}
      id='Слой_1'
      data-name='Слой 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 28.92 100'
      className='chevRight'
    >
      <title>chevron_right</title>
      <path
        d='M62.5,25.5c2.76,3.83,5.29,7.77,7.78,11.73s4.85,8,7.17,12S82,57.41,84.21,61.52s4.32,8.25,6.42,12.42l.79,1.57-.79,1.55L87.47,83.3l-3.25,6.18c-2.2,4.11-4.43,8.2-6.76,12.25s-4.7,8.07-7.17,12-5,7.9-7.79,11.73c1.4-4.51,3-8.9,4.71-13.27s3.48-8.68,5.33-13,3.77-8.53,5.74-12.75l3-6.32,3.09-6.26v3.12c-2.07-4.17-4.11-8.36-6.08-12.58S74.39,56,72.55,51.73s-3.64-8.6-5.33-13S63.91,30,62.5,25.5Z'
        transform='translate(-62.5 -25.5)'
      />
    </svg>
  );
};

ChevRight.defaultProps = {
  goTo: () => {
    console.log('goto');
  }
};

export default ChevRight;
