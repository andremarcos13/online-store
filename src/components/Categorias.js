import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    this.retornoGet();
  }

  retornoGet = async () => {
    const renderiza = await api.getCategories();
    console.log('renderiza', renderiza);
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

  render() {
    const { categorias, categories } = this.state;
    return (
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
              to={ { pathname: `/details/${produtos.id}` } }
            >
              Detalhes do Produto
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Categorias;
