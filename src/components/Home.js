import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho de Compras</Link>
        <Categorias />
      </div>
    );
  }
}

export default Home;
