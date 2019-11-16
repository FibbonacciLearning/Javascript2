import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import Cart from './Cart';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products: [], cartItemsFromCatalog: [] };
  	this.addToCart = this.addToCart.bind(this);

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }
  
  addToCart(item) {
    console.log("ADD TO CART CLICKED");
    console.log("Initial_state of catalog cart", this.state.cartItemsFromCatalog)
    this.setState({cartItemsFromCatalog: [...this.state.cartItemsFromCatalog, item]});    
  }

  render() {
    console.log("Final_state of catalog cart = props passed to cart", this.state.cartItemsFromCatalog);
    return (
    <div>
		  <div className="catalog">
	      <h2>Wine Catalog</h2>
	      <ProductList items={this.state.products} addToCartHandler={this.addToCart}/>
      </div>		  
	    <div>
        <h2>Cart</h2>
        <Cart items={this.state.cartItemsFromCatalog} />
      </div>
      
	  </div>)
  }
}

export default Catalog;
