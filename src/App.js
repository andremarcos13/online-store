import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import * as api from './services/api';
import Cart from './components/Cart';

function App() {
  console.log('resultadogetProductsAndQueryAPP', api.getProductsFromCategoryAndQuery());
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
