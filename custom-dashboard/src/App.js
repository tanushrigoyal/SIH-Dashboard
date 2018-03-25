import React, { Component } from 'react';
import logo from './logo.svg';
import MiniDrawer from './miniDrawer';
import './App.css';
import { Redirect } from 'react-router-dom';

class App extends Component {

  render() {

    return (
         <div className="App">
    <MiniDrawer />
      </div>
    );
  }
}

export default App;
