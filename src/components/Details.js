import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      email: '',
      avaliacao: '',
      avalia: '', // alterado estado inicial para ''
      filtrarAvaliacao: [], // criado estado para renderizacao
    };
  }

  componentDidMount = () => {
    this.showDetails();
    this.loadAvaliation(); // carrega avaliacoes somente do produdo filtrado assim que monta o componente
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

  handleChange = ({ target }) => {
    const { name } = target;
    const checkInputType = target.type === 'radio' ? target.id : target.value;
    this.setState({
      [name]: checkInputType,
    });
  }

  handleSaveButton = (event) => { // funcao removida do onChange
    event.preventDefault();
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { avalia, avaliacao, email } = this.state;
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoes.push({
      // desestrutura e usa shorthand porque dei mesmo nome
      id,
      avalia,
      avaliacao,
      email,
    });
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    window.location.reload(); // força atualizar pagina e limpar formulario
    // Aqui usa o json string e o outro pois precisa ser string salva no array
    // salvamos estes dados num objeto e salvamos no local storage, inicia vazio, depois push adiciona
  }

  loadAvaliation = () => {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || []; // carrega dados do localStorage
    const {
      match: {
        params: { id },
      },
    } = this.props; // traz props
    const verificaID = avaliacoes.filter((aval) => aval.id === id); // filtrando dados do localStorage - renderizar apenas do produto
    this.setState({
      filtrarAvaliacao: verificaID,
    });
  }

  render() {
    const { details, email, avaliacao, avalia, filtrarAvaliacao } = this.state;
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
        <form onSubmit={ this.handleSaveButton }>
          <input
            placeholder="Email"
            type="email"
            data-testid="product-detail-email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <div>
            <label htmlFor="comentario">
              Deixe seu comentário
              <textarea
                id="comentario"
                data-testid="product-detail-evaluation"
                value={ avaliacao }
                name="avaliacao"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="1">
              1
              <input
                type="radio"
                data-testid="1-rating"
                id="1"
                value={ avalia }
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="2">
              2
              <input
                type="radio"
                data-testid="2-rating"
                id="2"
                value={ avalia }
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="3">
              3
              <input
                type="radio"
                data-testid="3-rating"
                id="3"
                value={ avalia }
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="4">
              4
              <input
                type="radio"
                data-testid="4-rating"
                id="4"
                value={ avalia }
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="5">
              5
              <input
                type="radio"
                data-testid="5-rating"
                id="5"
                value={ avalia }
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              data-testid="submit-review-btn"
            >
              Avaliar
            </button>
          </div>
        </form>
        <div>
          { filtrarAvaliacao.map((elem, index) => ( // renderiza avaliação do produto filtrado
            <ul key={ index }>
              <p>
                {`Email: ${elem.email} Comentário:${elem.avaliacao} Nota:${elem.avalia}`}
              </p>
            </ul>
          ))}
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
