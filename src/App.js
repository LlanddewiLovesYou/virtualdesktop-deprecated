import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VirtualDesktop from './components/VirtualDesktop/VirtualDesktop'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VirtualDesktop />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
