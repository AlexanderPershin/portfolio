import React, { Component } from 'react';
import SplitText from 'react-pose-text';

export default class Split extends Component {
  state = {
    isVisible: true
  };

  split = () => {
    // some split
    const charPoses = {
      enter: {
        opacity: 1,
        transition: ({ charInWordIndex }) => ({
          type: 'spring',
          delay: charInWordIndex * 30,
          stiffness: 500 + charInWordIndex * 150,
          damping: 10 - charInWordIndex * 1
        })
      },
      exit: {
        opacity: 0,
        delay: ({ charIndex }) => charIndex * 50
      },
      drag: {
        y: 0,
        transition: ({ charInWordIndex }) => ({
          type: 'spring',
          velocity: 100 * Math.sin(1 + charInWordIndex),
          damping: 0
        })
      },
      dragEnd: {
        y: 0,
        transition: {
          type: 'spring',
          damping: 10,
          stiffness: 1000
        }
      },
      hoverable: true,
      init: {
        scale: 1,
        textShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)'
      },
      hover: {
        scale: 1.2,
        textShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)'
      }
    };

    const wordPoses = {
      draggable: true
    };

    return (
      <SplitText
        className='splitted'
        pose={this.state.isVisible ? 'enter' : 'exit'}
        charPoses={charPoses}
        wordPoses={wordPoses}
      >
        {this.props.children}
      </SplitText>
    );
  };

  render() {
    return <div>{this.split()}</div>;
  }
}
