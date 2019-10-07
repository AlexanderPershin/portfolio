import React from 'react';

const ChevLeft = props => {
  return (
    <svg
      id='chev_left'
      data-name='chev-left'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30.88 105.58'
      className='chevLeft'
      onClick={props.goTo}
    >
      <title>{props.title}</title>
      <text
        x='100%'
        y='-50%'
        textAnchor='middle'
        dominantBaseline='middle'
        className='chev__text'
      >
        {props.title}
      </text>
      <path
        d='M84.79,112.23c1.68,4.37,3.31,8.76,4.71,13.27-2.76-3.83-5.3-7.77-7.79-11.73s-4.85-8-7.17-12S70,93.59,67.78,89.48L64.53,83.3l-3.16-6.24-.79-1.55.79-1.57c2.1-4.17,4.22-8.31,6.42-12.42s4.44-8.2,6.76-12.25,4.7-8.06,7.17-12,5-7.9,7.78-11.73c-1.41,4.5-3,8.9-4.72,13.27s-3.48,8.67-5.33,13-3.77,8.53-5.74,12.75c-1.72,3.69-3.5,7.37-5.31,11l2.32,4.7,3,6.32c2,4.22,3.9,8.46,5.74,12.75S83.1,107.87,84.79,112.23Z'
        transform='translate(-60.02 -22.7)'
        strokeMiterlimit='10'
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
