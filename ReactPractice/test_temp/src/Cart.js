import React from 'react';
import CartItemList from './CartItemList';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { cartItemsOfCart: [] };
  }
  
  render() {
	console.log("cart rendered"); 
	console.log("final state of cart", this.state);
	console.log("props passed to cart item list", this.state.cartItemsOfCart) 
    return <div><CartItemList items={this.state.cartItemsOfCart}/></div>;
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
	console.log("props passed to componentWillReceiveProps from catalog", nextProps); 
	let newCartItemList = [];
	
	for (let item of nextProps.items) {
		let foundItem = newCartItemList.find(x => x.code === item.code);
		if (foundItem) {
			foundItem.quantity = foundItem.quantity + 1;
		} else {
			item.quantity = 1;
			newCartItemList.push(item);
		}
		console.log("result of for loop to be used to add to state of cart", newCartItemList);
		
		this.setState({ cartItemsOfCart: [...newCartItemList] });
	}
  }
  
}

export default Cart;
