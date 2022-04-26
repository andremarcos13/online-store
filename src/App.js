import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import * as api from './services/api';

function App() {
  console.log(api.getProductsFromCategoryAndQuery());
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
