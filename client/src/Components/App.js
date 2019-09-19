import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/contact' component={ Contact } />
        </Switch>
      </div>
    );
  }
}

export default App;
