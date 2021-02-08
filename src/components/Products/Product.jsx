import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    }
  }

  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data.productsOnCart !== this.props.data.productsOnCart) {
      if (this.props.data.productsOnCart.length == 0) {
        this.setState({
          flag: true
        })
      } else if (prevProps.data.productsOnCart.indexOf(this.props.product) !== -1 && this.props.data.productsOnCart.indexOf(this.props.product) === -1) {
        this.setState({
          flag: !this.state.flag
        })
      }
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
  }

  render() {
    const { product } = this.props;
    const { flag } = this.state;
    let boton;
    if (flag) {
      boton = <button className="waves-effect waves-light btn boton-agregar" onClick={this.handleClickAgregar}>Agregar</button>;
    } else {
      boton = <button className="waves-effect waves-light btn boton-eliminar" onClick={this.handleClickRemover}>Eliminar</button>;
    }

    return (
      <div className="col s4">
        <div className="card large">
          <div className="card-image">
            <img src={product.baseimageurl} />
            <span className="card-title">{`S/ ${product.id / 2}`}</span>
          </div>
          <div className="card-content multiline">
            <h6>{`Producto: ${product.id}`}</h6>
            <p>{`Fecha de creación: ${product.date}`}</p>
          </div>

          <div className="card-action">
            <button data-target={product.id} className="waves-effect waves-teal btn-flat modal-trigger">Vista Previa</button>
            {boton}
          </div>
        </div>

        <div id={product.id} className="modal">

          <div className="modal-content">
            <div className="card large">
              <div className="card-image">
                <img src={product.baseimageurl} />
                <span className="card-title">{`S/ ${product.id / 2}`}</span>
              </div>

              <div className="card-content multiline">
                <h6>{`Producto: ${product.id}`}</h6>
                <h6>Información Extra</h6>
                <p>{`Dimensiones del producto:
                Alto: ${product.height} Ancho: ${product.width}`}
                </p>
              </div>

              <div className="card-action">
                {boton}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>

        </div>

      </div>
    );
  }
}

export default Product;


