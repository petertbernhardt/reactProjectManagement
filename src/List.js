import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  getInitialState() {
    return { items: [] }
  }

  render() {
    let listItems = this.props.items.map(function(item) {
      return (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
        </li>
      );
    })

    return (
      <div>
        <label>{this.props.name}</label>
        <ul className="List">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;