import React from 'react';

import { CSSTransition } from 'react-transition-group';

import classNames from 'classnames';

import Plus from './Plus';
import Minus from './Minus';

const AccordionItem = ({ label, body, opened, selectItem }) => {
  const nameClassNames = classNames('item__name', {
    'item--active': opened
  });

  return (
    <div className='accordeon__item'>
      <span className={nameClassNames} onClick={() => selectItem(label)}>
        {opened ? <Minus /> : <Plus />}
        {label}
      </span>
      <CSSTransition
        classNames='show_item'
        in={opened}
        unmountOnExit
        timeout={200}
      >
        <p className='item__desc'>{body}</p>
      </CSSTransition>
    </div>
  );
};

AccordionItem.defaultProps = {
  label: 'Add skill name',
  body: 'Add skill description'
};

export default AccordionItem;
