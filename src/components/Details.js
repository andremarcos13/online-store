import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      // cart: [],
    };
  }

  componentDidMount = () => {
    this.showDetails();
    // const teste = [];
    // teste.push(JSON.parse(localStorage.getItem('cartItems')));
    // localStorage.setItem('cartItems', JSON.stringify(teste));
  };

  showDetails = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const retorno = await api.getProductById(id);
    console.log('retornoId', retorno);
    this.setState({
      details: retorno,
    });
  }

  saveButton = () => {
    const { details } = this.state;
    details.qtd = (details.qtd || 0) + 1;
    const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
    storageReturn.push(details);
    localStorage.setItem('cartItems', JSON.stringify(storageReturn));
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <p>Detalhes</p>

        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho de Compras
        </Link>
        <div key={ details.id }>
          <p data-testid="product-detail-name">
            { details.title }
          </p>
          <img alt={ details.title } src={ details.thumbnail } />
          <p>
            { `R$ ${details.price}` }
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.saveButton }
            name={ details.id }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Details;
