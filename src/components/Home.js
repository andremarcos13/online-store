import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      valorPesquisa: '',
      listaDeProdutos: [],
      cart: [],
      categorias: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    this.retornoGet();
  }

  retornoGet = async () => {
    const renderiza = await api.getCategories();
    this.setState({
      categorias: renderiza,
    });
  }

  retornoCategory = async ({ target }) => {
    const category = await api.getProductsFromCategory(target.id);
    this.setState({
      categories: category.results,
    });
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
  }

  saveButton = async ({ target }) => {
    const { categories } = this.state;
    const itemsCart = categories.find((el) => el.id === target.name);
    itemsCart.qtd = (itemsCart.qtd || 0) + 1;
    const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
    storageReturn.push(itemsCart);
    localStorage.setItem('cartItems', JSON.stringify(storageReturn));
  }

  render() {
    const { valorPesquisa, listaDeProdutos, categorias, categories, cart } = this.state;
    const location = {
      pathname: '/cart',
      prop: cart,
    };

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
        <Link
          data-testid="shopping-cart-button"
          to={ location }
        >
          Carrinho de Compras

        </Link>
        <div>
          { categorias.map((categoria) => (
            <button
              data-testid="category"
              type="button"
              key={ categoria.name }
              id={ categoria.id }
              onClick={ this.retornoCategory }
            >
              {categoria.name}
            </button>))}
          { categories.map((produtos) => (
            <div key={ produtos.id } data-testid="product">
              <p>
                {produtos.title}
              </p>
              <img alt={ produtos.title } src={ produtos.thumbnail } />
              <p>
                {`R$ ${produtos.price}`}
              </p>
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/details/${produtos.id}`, state: { param1: cart } } }
              >
                Detalhes do Produto
              </Link>
              {/* INSERIR BOTÃO */}
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ this.saveButton }
                name={ produtos.id }
              >
                Adicionar ao carrinho
              </button>
              {/* FINALIZA INSERIR BOTÃO */}

            </div>
          ))}
        </div>
        <Card listaDeProdutos={ listaDeProdutos } />
      </div>
    );
  }
}

export default Home;
