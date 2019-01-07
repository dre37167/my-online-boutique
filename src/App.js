import React, { Component } from 'react';
import Router from './router';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='./'>Home</NavLink></li>
    <li><NavLink to='./Cart'>Cart</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>

    );
  }
}

export default App;
