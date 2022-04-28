import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  saveButton = () => {
    console.log('salvei');
  }

  render() {
    const { listaDeProdutos } = this.props;
    return (
      <div>
        { listaDeProdutos.map((produto) => (
          <div data-testid="product" key={ produto.id }>
            <p>
              {produto.title}
            </p>
            <img alt={ produto.title } src={ produto.thumbnail } />
            <p>
              {`R$ ${produto.price}`}
            </p>
            {/* INSERIR BOTÃO */}
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ this.saveButton }
            >
              Adicionar ao carrinho
            </button>
            {/* FINALIZA INSERIR BOTÃO */}
            <Link
              data-testid="product-detail-link"
              to={ { pathname: `/details/${produto.id}` } }
            >
              Detalhes do Produto
            </Link>
          </div>))}
      </div>
    );
  }
}

Card.propTypes = {
  listaDeProdutos: propTypes.shape.isRequired,
};

export default Card;
