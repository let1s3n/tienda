import React, { Component } from 'react'


class Cart extends Component {

  handleClickRemover = (product) => {
    const { handleRemove } = this.props;
    handleRemove(product);

  }
  handleVaciar = () => {
    const {handleVaciar} = this.props;
    handleVaciar();
  }
  render() {
    const { productsOnCart} = this.props;
    let total = 0;
    return (

      <div id="dropdown1" className="dropdown-content">
        <button className="waves-effect waves-teal btn-flat boton-vaciar" onClick={this.handleVaciar}>Vaciar</button>
        <h5>Carrito</h5>
        <ul>
          {productsOnCart.map((product, i) => {
            total += product.id / 2;
            return (
              <li key={i}>
                {`Producto: ${product.id}`}
                <button className="boton-eliminarItem" onClick={() => this.handleClickRemover(product)}>Eliminar</button>
              </li>

            )

          })}
        </ul>
        <p>{`Total     :S/ ${total}`}</p>
      </div>

    );
  }
}

export default Cart;