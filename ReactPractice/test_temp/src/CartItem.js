import React from 'react';

class CartItem extends React.Component {
  render() {
    let totalPrice = this.props.item.price * this.props.item.quantity;
    return <li className="cart-item">
            <h3>{this.props.item.name}    ({this.props.item.quantity})        {totalPrice}</h3>
          </li>;
  }
}

export default CartItem;