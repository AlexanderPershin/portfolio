import React from 'react';

import { CSSTransition } from 'react-transition-group';

const FadeTransition = props => (
  <CSSTransition
    {...props}
    classNames={props.animClasses}
    timeout={350}
    appear
    addEndListener={(node, done) => {
      node.addEventListener('transitionend', done, false);
    }}
  />
);

FadeTransition.defaultProps = {
  animClasses: 'fade-right'
};

export default FadeTransition;
