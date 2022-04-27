import React, { Component } from 'react';
import * as api from '../services/api';
// import { getCategories } from '../services/api';

class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
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
  // api.getCategories().then(categories => { console.log(categories) })
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        { categorias.map((categoria) => (
          <button
            data-testid="category"
            type="button"
            key={ categoria.name }
          >
            {categoria.name}
          </button>))}
      </div>
    );
  }
}

export default Categorias;
