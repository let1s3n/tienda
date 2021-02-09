import React, { Component } from 'react'
import { Navbar } from 'react-materialize';
import Cart from '../Cart/Cart'
import ProductList from '../Products/ProductList'

class Home extends Component {
  state = {
    itemList: []
  }

  handleAddition = (item) => {
    this.setState({
      itemList: [...this.state.itemList, item]
    });
  }

  handleRemove = (item) => {
    const { itemList } = this.state;
    const newItemList = itemList.filter(product => product.id !== item.id);

    this.setState({
      itemList: newItemList
    });

  }

  handleVaciar = () => {
    this.setState({
      itemList: []
    });
  }

  render() {
    const { itemList } = this.state;
    return (
      <div>
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="#!">Tienda</a>}
        >
          <Cart productsOnCart={itemList} handleRemove={this.handleRemove} handleVaciar={this.handleVaciar} />
        </Navbar>
        <ProductList handleAddition={this.handleAddition} handleRemove={this.handleRemove} productsOnCart={itemList} />
      </div>
    );
  }
}

export default Home;