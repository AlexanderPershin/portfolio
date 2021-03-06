import React from 'react';

const ChevRight = props => {
  return (
    <svg
      onClick={props.goTo}
      id='chev_right'
      data-name='chev-right'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30.88 105.58'
      className='chevRight'
    >
      <title>{props.title}</title>
      <text x='50%' y='50%' textAnchor='middle' className='chev__text'>
        {props.title}
      </text>
      <path
        d='M90.42,75.51l-.79,1.55L86.47,83.3l-3.25,6.18c-2.2,4.11-4.43,8.2-6.76,12.25s-4.7,8.07-7.17,12-5,7.9-7.79,11.73c1.4-4.51,3-8.9,4.71-13.27s3.48-8.68,5.33-13,3.77-8.53,5.74-12.75l3-6.32,2.32-4.7c-1.81-3.65-3.59-7.33-5.31-11-2-4.22-3.9-8.47-5.74-12.75s-3.64-8.6-5.33-13S62.91,30,61.5,25.5c2.76,3.83,5.29,7.77,7.78,11.73s4.85,8,7.17,12S81,57.41,83.21,61.52s4.32,8.25,6.42,12.42Z'
        transform='translate(-60.1 -22.7)'
        strokeMiterlimit='10'
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
