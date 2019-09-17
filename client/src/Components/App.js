import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
