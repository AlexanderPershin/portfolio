import React from 'react';

const ChevLeft = props => {
  return (
    <svg
      id='Слой_1'
      data-name='Слой 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 28.92 100'
      className='chevLeft'
      onClick={props.goTo}
    >
      <title>chevron_left</title>
      <path
        d='M87.5,25.5c-1.41,4.5-3,8.9-4.72,13.27s-3.48,8.67-5.33,13-3.77,8.53-5.74,12.75-4,8.41-6.08,12.58V73.94l3.09,6.26,3,6.32c2,4.22,3.9,8.46,5.74,12.75s3.64,8.6,5.33,13S86.1,121,87.5,125.5c-2.76-3.83-5.3-7.77-7.79-11.73s-4.85-8-7.17-12S68,93.59,65.78,89.48L62.53,83.3l-3.16-6.24-.79-1.55.79-1.57c2.1-4.17,4.22-8.31,6.42-12.42s4.44-8.2,6.76-12.25,4.7-8.06,7.17-12S84.74,29.33,87.5,25.5Z'
        transform='translate(-58.58 -25.5)'
      />
    </svg>
  );
};

ChevLeft.defaultProps = {
  goTo: () => {
    console.log('goto');
  }
};

export default ChevLeft;
