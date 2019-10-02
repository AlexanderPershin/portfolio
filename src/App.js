import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import ChevLeft from './components/ChevLeft';
import ChevRight from './components/ChevRight';

const App = props => {
  const location = props.location;
  const history = props.history;

  const handleNext = () => {
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

      <Switch>
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
    </div>
  );
};

export default withRouter(App);
