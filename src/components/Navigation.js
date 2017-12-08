import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, Jumbotron, Button } from 'react-bootstrap';

const Navigation = () => (  
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'} activeClassName="active">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
        <Link to={'/add'} activeClassName="active">Add a Project</Link>
      </NavItem>
      <NavItem>
        <Link to={'/view'} activeClassName="active">View a Project</Link>
      </NavItem>
      <NavItem>
        <Link to={'/edit'} activeClassName="active">Edit a Project</Link>
      </NavItem>
      <NavItem>
        <Link to={'/export'} activeClassName="active">Export all Projects</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation