import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
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
          </div>))}
      </div>
    );
  }
}

Card.propTypes = {
  listaDeProdutos: propTypes.shape.isRequired,
};

export default Card;
