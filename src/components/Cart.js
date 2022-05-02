import React, { Component } from 'react';
import propTypes from 'prop-types';

class Cart extends Component {
  render() {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div className="cart-component">
        { storage === null
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>) : (
            storage.map((element) => (
              <div key={ element.id }>
                <p data-testid="shopping-cart-product-name">
                  { element.title }
                </p>
                <img alt={ element.title } src={ element.thumbnail } />
                <p>
                  { `R$ ${element.price}` }
                </p>
                <div>
                  <p data-testid="shopping-cart-product-quantity">{ element.qtd }</p>
                </div>
              </div>
            ))
          ) }
      </div>
    );
  }
}

Cart.propTypes = {
  location: propTypes.shape({
    prop: propTypes.arrayOf(propTypes.shape).isRequired,
  }),
};
Cart.defaultProps = {
  location: null,
};
export default Cart;
