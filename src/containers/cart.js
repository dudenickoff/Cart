import React from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import CartItem from '../components/cart-item'
import products from '../products'

class Cart extends React.Component {
  renderElems(elems) {
    const { increaseQuantity, 
      decreaseQuantidy, 
      removeFromCart } = this.props;
    return elems.map(data => {
      return (
        <CartItem 
          props={data} 
          key={data.product_id}
          increase={() => increaseQuantity(data)}
          decrease={() => decreaseQuantidy(data)}
          remove={() => removeFromCart(data)}
        />
      )
    })
  }
  countTotal(array){
    return array.reduce((sum, current) => current.product_cost*current.qty + sum, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-list">
          <ul>
            <li>
              <span>Item</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total price</span>
            </li>
            {this.renderElems(this.props.cart)}
          </ul>
          <div className='totalCost'>
            <span>Total amount: {this.countTotal(this.props.cart)} USD</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ cart }) {
  return { cart }
}
const mapDispatchToProps = dispatch => ({
  removeFromCart: item =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        data: item
      }
    }),
  increaseQuantity: item =>
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: {
        data: item
      }
    }),
  decreaseQuantidy: item => 
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: {
        data: item
      }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
