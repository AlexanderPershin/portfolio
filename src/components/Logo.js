import React from 'react';

const Logo = () => {
  return (
    <svg
      id='Слой_1'
      data-name='Слой 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 94.81 139.83'
      className='logo'
    >
      <defs>
        <filter id='drop_shadow' x='-10' y='-10' height='15' width='15'>
          <feOffset result='offOut' in='SourceAlpha' dx='5' dy='5'></feOffset>
          <feGaussianBlur
            result='blurOut'
            in='offOut'
            stdDeviation='5'
          ></feGaussianBlur>
          <feBlend in='SourceGraphic' in2='blurOut' mode='normal'></feBlend>
        </filter>
      </defs>
      <path
        d='M145.5,165.5c-1.31-2.41-2.55-4.85-3.82-7.28L138,150.9c-2.47-4.88-4.86-9.8-7.24-14.72q-7.11-14.76-13.86-29.68T103.63,76.56L97.19,61.51l-1.71-4.1-.61,1.43L89.5,71.2c-3.63,8.22-7.31,16.42-11.12,24.56S70.68,112,66.64,120.07c-2,4-4.06,8-6.17,12l-3.18,6c-1.1,2-2.16,4-3.29,5.93.6-2.18,1.27-4.34,1.9-6.51l2-6.46c1.34-4.31,2.77-8.58,4.2-12.85q4.32-12.8,9-25.44c3.1-8.44,6.34-16.83,9.63-25.19l5-12.51,5.14-12.46,4.63-11.25,4.6,11.26,6.19,15.15,6.06,15.2q6,15.24,11.75,30.56c3.81,10.23,7.55,20.5,11.14,30.82,1.78,5.16,3.57,10.33,5.26,15.53l2.55,7.8C143.88,160.27,144.73,162.87,145.5,165.5Z'
        transform='translate(-52.48 -30.01)'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default Logo;
