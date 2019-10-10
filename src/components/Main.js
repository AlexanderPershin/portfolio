import React from 'react';

import Split from './Split';

const Main = () => {
  return (
    <div className='main'>
      <h1 className='heading1'>
        <Split>Hello, I'm Alexander</Split>
      </h1>
      <h2 className='heading2'>
        <Split>I'm a frontend web developer</Split>
      </h2>
    </div>
  );
};

export default Main;
