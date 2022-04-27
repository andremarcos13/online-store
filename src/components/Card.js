import React, { Component } from 'react';
import propTypes from 'prop-types';
// import * as api from '../services/api';

class Card extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     resultado: [],
  //   };
  // }

  // componentDidMount = () => {
  //   this.retornoGet();
  // }

  // retornoGet = async () => {
  //   const { valorPesquisa } = this.props;
  //   const rendProducts = await api.getProductsFromQuery(valorPesquisa);
  //   this.setState({
  //     produtos: rendProducts,
  //   }, () => {
  //     const { produtos } = this.state;
  //     const { results } = produtos;
  //     this.setState({
  //       resultado: results,
  //     });
  //   });
  // }

  render() {
    const { listaDeProdutos } = this.props;
    // const { results } = produtos;
    // console.log('state', results);
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
