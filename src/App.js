import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, Jumbotron, Button } from 'react-bootstrap';

const Home = () => <h1>Home</h1>;

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

const Add = () => <h1>Add a Project</h1>;

const View = () => <h1>View a Project</h1>;

const Edit = () => <h1>Edit a Project</h1>;

const Export = () => <h1>Export all Projects</h1>;

const Content = () => (
  <div className="content">
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={Add} />
    <Route exact path="/view" component={View} />
    <Route exact path="/edit" component={Edit} />
    <Route exact path="/export" component={Export} />
  </div>
);

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