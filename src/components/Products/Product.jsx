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
   /*  this.setState({
      flag: !this.state.flag
    }); */
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
        <div className="card medium">
          <div class="card-image">
            <img src={product.baseimageurl} />
            <span class="card-title">${product.id / 2}</span>
          </div>
          {/* {`id: ${product.id} alto: ${product.height} ancho: ${product.width}`}
        {boton} */}
          <div class="card-content">
            <h6>{`Producto: ${product.id}`}</h6>
            <p>{`Este producto tiene las siguientes dimensiones
          alto:${product.height}
          ancho:${product.width}`}</p>
          </div>

          <div class="card-action">
            <button data-target={product.id} class="btn modal-trigger">Vista Previa</button>

            {boton}
          </div>



        </div>

        <div id={product.id} className="modal">
          <div className="modal-content">

            <div className="card medium">
              <div class="card-image">
                <img src={product.baseimageurl} />
                <span class="card-title">${product.id / 2}</span>
              </div>

              <div class="card-content">
                <h6>{`Producto: ${product.id}`}</h6>
                <p>{`Este producto tiene las siguientes dimensiones
          alto:${product.height}
          ancho:${product.width}`}</p>
              </div>

              <div class="card-action">
                {boton}
              </div>


            </div>

          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>



      </div>
    );
  }
}

export default Product;


