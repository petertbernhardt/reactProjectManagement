import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Add from '../routes/Add.js';
import Edit from '../routes/Edit.js';
import Export from '../routes/Export.js';
import Home from '../routes/Home.js';
import View from '../routes/View.js';

const Content = () => (
  <div className="content">
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={Add} />
    <Route exact path="/view" component={View} />
    <Route exact path="/edit" component={Edit} />
    <Route exact path="/export" component={Export} />
  </div>
);

export default Content