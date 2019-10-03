import React from 'react';

const AccordionItem = ({ label, body }) => {
  return (
    <div className='accordeon__item'>
      <span className='accordeon__name'>{label}</span>
      <p className='accordeon__desc'>{body}</p>
    </div>
  );
};

AccordionItem.defaultProps = {
  label: 'Add skill name',
  body: 'Add skill description'
};

export default AccordionItem;
