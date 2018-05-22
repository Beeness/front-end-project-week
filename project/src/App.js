import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import displayList from './displayList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={displayList}></Route>
      </div>
    );
  }
}

export default App;