import React, { Component } from 'react'
import ProductList from './Products/ProductList'
import Home from './Home/Home'
import 'materialize-css/dist/css/materialize.min.css'
import '../index.css'
class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

export default App;