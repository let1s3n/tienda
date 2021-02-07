import React, { Component } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import M from 'materialize-css/dist/js/materialize'
import Cart from '../../Cart/Cart'
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
    const { productsOnCart,handleRemove,handleVaciar } = this.props;
    /*  const { showCart } = this.state; */
    return (
      <div>
        <nav>
          <div className="nav-wrapper">

            {/* <button onClick={this.handleClick}><img src={TiShoppingCart} alt="cart-icon" /></button>

          {showCart && <Cart />} */}

            <ul className="right">


              <li><a className="dropdown-trigger btn" href="#" data-target="dropdown1">{`${productsOnCart.length}        `}<TiShoppingCart /></a></li>
            </ul>
          </div>


        </nav>

        <Cart productsOnCart={productsOnCart} handleRemove={handleRemove} handleVaciar={handleVaciar}/>

      </div>

    );
  }
}

export default NavBar;