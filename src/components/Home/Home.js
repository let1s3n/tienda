import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import ProductList from '../Products/ProductList'
class Home extends Component {
  state={
    itemList:[]
  }

  handleAddition = (item) => {
    this.setState({
      itemList:[...this.state.itemList,item]
    });
    /* console.log(item); */
    
  }

  handleRemove = (item) => {
    const {itemList} = this.state;
    const newItemList = itemList.filter(product => product.id !== item.id   );

    this.setState({
      itemList:newItemList
    });

  }
  render() {
    const {itemList} = this.state;
    return (
      
      <div>
        <NavBar productsOnCart={itemList} />
        <ProductList handleAddition={this.handleAddition} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default Home;