import React, { Component } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import M from 'materialize-css/dist/js/materialize'
class NavBar extends Component {
  state = {
    showCart: false
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems);
    });
  }
  /* handleClick = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  } */
  render() {
    const { productsOnCart } = this.props;
    /*  const { showCart } = this.state; */
    return (
      <div>
        <nav>
          <div className="nav-wrapper">

            {/* <button onClick={this.handleClick}><img src={TiShoppingCart} alt="cart-icon" /></button>

          {showCart && <Cart />} */}

            <ul className="right hide-on-med-and-down">


              <li><a className="dropdown-trigger btn" href="#" data-target="dropdown1">{productsOnCart.length}</a></li>{TiShoppingCart}
            </ul>
          </div>


        </nav>

        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>

      </div>

    );
  }
}

export default NavBar;