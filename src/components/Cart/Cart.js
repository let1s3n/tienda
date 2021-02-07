import React, { Component } from 'react'


class Cart extends Component {


  render() {
    const {productsOnCart} = this.props;
    return (
      <ul id="dropdown1" className="dropdown-content">
        {productsOnCart.map((product,i)=>{
          return <li key={i}>{product.id}</li>
          
        })}
      </ul>

    );
  }
}

export default Cart;