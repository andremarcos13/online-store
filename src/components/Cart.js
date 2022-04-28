import React, { Component } from 'react';
import propTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { location: { prop } } = this.props;
    console.log('prop', prop);
    return (
      <div className="cart-component">
        { prop.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>) : (
            prop.map((categoria) => (
              <div key={ categoria.id }>
                <p data-testid="shopping-cart-product-name">
                  {categoria.title}
                </p>
                <img alt={ categoria.title } src={ categoria.thumbnail } />
                <p>
                  {`R$ ${categoria.price}`}
                </p>
                <div>
                  <p data-testid="shopping-cart-product-quantity">{categoria.qtd}</p>
                </div>
              </div>
            ))
          )}
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
