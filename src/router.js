import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import CartPage from './Pages/cartPage'


const Router = () =>(
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/Cart' component={CartPage} />
  </Switch>
)
export default Router
