import React, { Component } from 'react';
import Router from './router';
import { NavLink } from 'react-router-dom';




const Navigation = (props) => <nav>
  <ul className="main-navbar">
    <li><NavLink to='./'>Home</NavLink></li>
    <li><NavLink to='./Cart'>Cart</NavLink></li>
    <li><NavLink to='./SignupPge'>Sign up</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>

    );
  }
}

export default App;
