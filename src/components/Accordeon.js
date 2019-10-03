import React from 'react';

import AccordeonItem from './AccordeonItem';

const Accordeon = ({ list }) => {
  const renderList = () => {
    return list.map(item => <AccordeonItem {...item} key={item.label} />);
  };

  return <div className='accordeon'>{renderList()}</div>;
};

Accordeon.defaultProps = {
  list: []
};

export default Accordeon;
