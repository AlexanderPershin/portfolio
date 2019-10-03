import React, { useState } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import { SwitchTransition } from 'react-transition-group';

import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import ChevLeft from './components/ChevLeft';
import ChevRight from './components/ChevRight';

import FadeTransition from './components/FadeTransition';

const App = props => {
  const [animDir, setAnimDir] = useState('right');

  const location = props.location;
  const history = props.history;

  const handleNext = () => {
    setAnimDir('right');

    switch (location.pathname) {
      case '/':
        history.push('/contact');
        break;
      case '/contact':
        history.push('/skills');
        break;
      case '/skills':
        history.push('/work');
        break;
      case '/work':
        history.push('/');
        break;
      default:
        history.push('/');
    }
  };

  const handlePrevious = () => {
    setAnimDir('left');

    switch (location.pathname) {
      case '/':
        history.push('/work');
        break;
      case '/work':
        history.push('/skills');
        break;
      case '/skills':
        history.push('/contact');
        break;
      case '/contact':
        history.push('/');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <div className='app'>
      <Header />
      <ChevLeft goTo={handlePrevious} />
      <ChevRight goTo={handleNext} />

      <SwitchTransition mode='out-in'>
        <FadeTransition
          key={history.location.pathname}
          animClasses={`fade-${animDir}`}
        >
          <Switch location={location}>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/skills'>
              <Skills />
            </Route>
            <Route path='/work'>
              <Work />
            </Route>
          </Switch>
        </FadeTransition>
      </SwitchTransition>
    </div>
  );
};

export default withRouter(App);
