import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    );
  }
}

export default App;
