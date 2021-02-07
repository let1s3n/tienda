import React, { Component } from 'react'


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    }
  }
  handleClickAgregar = () => {
    const { index, product, data } = this.props;
    data.handleAddition(product);
    this.setState({
      flag: !this.state.flag
    });
  }

  handleClickRemover = () => {
    const { index, product, data } = this.props;
    data.handleRemove(product);
    this.setState({
      flag: !this.state.flag
    });
  }



  render() {
    const { product } = this.props;
    const { flag } = this.state;
    let boton;
    if (flag) {
      boton = <button onClick={this.handleClickAgregar}>Agregar</button>;

    } else {
      boton = <button onClick={this.handleClickRemover}>Eliminar</button>;
    }
    return (
      <div className="col s4">
      <div className="card small">
        <div class="card-image">
          <img src={product.baseimageurl} />
          <span class="card-title">${product.id}</span>
        </div>
        {/* {`id: ${product.id} alto: ${product.height} ancho: ${product.width}`}
        {boton} */}
        <div class="card-content">
          <p>{`id: ${product.id} alto: ${product.height} ancho: ${product.width}`}</p>
        </div>

        <div class="card-action">
          {boton}
        </div>


      </div>
      </div>
    );
  }
}

export default Product;


