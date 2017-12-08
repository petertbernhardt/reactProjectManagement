import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, Jumbotron, Button } from 'react-bootstrap';
import Navigation from './components/Navigation.js';
import Content from './components/Content.js';

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />
        <Content />
      </div>
    </Router>
  </div>
);

export default App