import React, { useState } from 'react';

import AccordeonItem from './AccordeonItem';

const Accordeon = ({ list }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = openedLabel => {
    if (!opened) {
      setOpened(openedLabel);
    } else {
      if (opened === openedLabel) {
        setOpened(false);
      } else {
        setOpened(openedLabel);
      }
    }
  };

  const getOpened = label => {
    return label === opened ? true : false;
  };

  const renderList = () => {
    return list.map(item => (
      <AccordeonItem
        {...item}
        key={item.label}
        opened={getOpened(item.label)}
        selectItem={handleOpen}
      />
    ));
  };

  return <div className='accordeon'>{renderList()}</div>;
};

Accordeon.defaultProps = {
  list: []
};

export default Accordeon;
