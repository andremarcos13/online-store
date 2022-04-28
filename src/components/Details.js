import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
    };
  }

  componentDidMount = () => {
    this.showDetails();
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

  render() {
    const { details } = this.state;
    return (
      <div>
        Detalhes

        <div key={ details.id }>
          <p data-testid="product-detail-name">
            { details.title }
          </p>
          <img alt={ details.title } src={ details.thumbnail } />
          <p>
            {`R$ ${details.price}`}
          </p>
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
