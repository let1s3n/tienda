import React, { Component } from 'react'
import { IoIosClose } from "react-icons/io";

class Cart extends Component {

  handleClickRemover = (product) => {
    const { handleRemove } = this.props;
    handleRemove(product);
  }

  handleVaciar = () => {
    const { handleVaciar } = this.props;
    handleVaciar();
  }

  render() {
    const { productsOnCart } = this.props;
    let total = 0;
    return (
      <div id="dropdown1" className="dropdown-content">
        <button className="waves-effect waves-teal btn-flat boton-vaciar" onClick={this.handleVaciar}>Vaciar</button>
        <h5>Carrito</h5>
        <ul>
          {productsOnCart.map((product, i) => {
            total += parseFloat((product.id / 150).toFixed(2));
            return (
              <li key={i} className="item-carrito">
                {`ID Producto: ${product.id}`}<button className="btn-flat boton-eliminar-item" onClick={() => this.handleClickRemover(product)}><IoIosClose /></button>
              </li>
            )
          })}
        </ul>

        <p className="multiline"><strong>{`Total: `}</strong> S/ {total}</p>
      </div>

    );
  }
}

export default Cart;