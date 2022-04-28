import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
import Card from './Card';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      valorPesquisa: '',
      listaDeProdutos: [],
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      valorPesquisa: target.value,
    });
  }

  handleClick = async () => {
    const { valorPesquisa } = this.state;
    const retornoFunc = await api.getProductsFromQuery(valorPesquisa);
    this.setState({
      listaDeProdutos: retornoFunc.results,
    });
    console.log(retornoFunc.results);
  }

  render() {
    const { valorPesquisa, listaDeProdutos } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ valorPesquisa }
          onChange={ this.handleInput }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Buscar

        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho de Compras</Link>
        <Categorias />
        <Card listaDeProdutos={ listaDeProdutos } />
      </div>
    );
  }
}

export default Home;
