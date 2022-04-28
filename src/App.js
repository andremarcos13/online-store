import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Cart from './components/Cart';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
