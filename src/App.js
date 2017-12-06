import React, { Component } from 'react';
import List from './List.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    let projects = [
      {
        "name": "Get to Mars",
        "link": "http://www.spacex.com"
      }
    ];
    let managers = [
      {
        "name": "Elon Musk",
        "link": "http://www.spacex.com"
      }
    ];
    let workers = [
      {
        "name": "Bob",
        "link": ""
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Project Management App</h1>
        </header>
        <List name="Projects" items={projects} />
        <List name="Managers" items={managers} />
        <List name="Workers" items={workers} />
      </div>
    );
  }
}

export default App;
