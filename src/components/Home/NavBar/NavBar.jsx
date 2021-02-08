import React, { Component } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import M from 'materialize-css/dist/js/materialize'
import Cart from '../../Cart/Cart'

class NavBar extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems);
    });
  }

  render() {
    const { productsOnCart, handleRemove, handleVaciar } = this.props;
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Tienda</a>
            <ul className="right">
              <li><a className="dropdown-trigger btn multiline counter-cart" href="#" data-target="dropdown1">{productsOnCart.length} <TiShoppingCart /></a></li>
            </ul>
          </div>
        </nav>

        <Cart productsOnCart={productsOnCart} handleRemove={handleRemove} handleVaciar={handleVaciar} />
      </div>

    );
  }
}

export default NavBar;