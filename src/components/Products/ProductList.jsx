import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }


  componentDidMount() {
    this.fetchGOT();
  }

  fetchGOT = () => {
    fetch("https://api.harvardartmuseums.org/image?apikey=410b50e0-e68f-4932-a006-ce27bc423403&size=6&page=1")
      .then(image => {
        return image.json();

      })
      .then(item => {
        this.setState({
          products: [...item.records]
        })
        /*  console.log(item.records); */
      })
      .catch(error => console.log('some shit happened ', error))
  }

  /* handleAddition = (item) =>{
    this.props.handleAddition(item);
  } */
  render() {
    const { products } = this.state;
    return (
      <div className="row">
        
          {products.map((product, i) => {

            return (

              <Product index={i} product={product} data={this.props} />


            )
          })}
        
      </div>

    );
  }
}

export default ProductList;


