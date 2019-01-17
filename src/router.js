import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import CartPage from './Pages/cartPage'
import SignupPage from './Pages/SignupPage';




const Router = () =>(
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/Cart' component={CartPage} />
    <Route exact path='/SignupPge' component={SignupPage} />
  </Switch>
)
export default Router
