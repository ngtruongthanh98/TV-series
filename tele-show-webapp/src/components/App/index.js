import React, { Component } from 'react';
import Series from '../../containers/Series';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (      
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TV Series List</h1>
          </header>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
