import React from 'react';

import SplitText from 'react-pose-text';

// Chars animations
const charPoses = {
  draggable: ({ charsDraggable }) => charsDraggable,
  hoverable: true,
  exit: { opacity: 0, y: ({ initialOffset }) => initialOffset, scale: 2 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    delay: ({ charIndex }) => charIndex * 30,
    transition: {
      type: 'spring',
      damping: 60,
      stiffness: 3000,
      mass: 5
    }
  },
  init: {
    scaleX: 1,
    scaleY: 1,
    textShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)'
  },
  drag: {
    scale: ({ charsDraggable }) => (charsDraggable ? 1.2 : 1),
    textShadow: '10px 10px 10px rgba(0, 0, 0, 0.35)',
    transition: ({
      charInWordIndex,
      numCharsInWord,
      numChars,
      charIndex,
      numWords,
      wordIndex
    }) => ({
      type: 'spring',
      velocity: 5 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    scale: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 2000,
      mass: 10
    }
  },
  hover: {
    scaleY: 1.2,
    scaleX: 0.8,
    textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'
  },
  hoverEnd: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      type: 'spring',
      damping: 5,
      stiffness: 1500,
      mass: 20
    }
  }
};

// Words animations
const wordPoses = {
  draggable: true,
  drag: {
    scale: 1.2,
    textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
  },
  dragEnd: {
    scale: 1,
    transition: ({ wordIndex, numWords }) => ({
      type: 'spring',
      damping: (wordIndex + 1) * 10,
      stiffness: 2000,
      mass: (numWords / (wordIndex + 1)) * 2
    })
  }
};

const Split = props => {
  return (
    <SplitText
      className={props.className}
      initialPose='exit'
      pose='enter'
      charPoses={charPoses}
      charsDraggable={false}
      initialOffset={50}
      wordPoses={wordPoses}
    >
      {props.children}
    </SplitText>
  );
};

Split.defaultProps = {
  className: 'splitted'
};

export default Split;
