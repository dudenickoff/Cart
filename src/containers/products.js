import React from 'react'
import ProductItem from '../components/products-item';
import { connect } from 'react-redux'

import products from '../products'

class Products extends React.Component {
  renderProducts(products) {
    const { addToCart } = this.props;
    // console.log(addToCart);
    return products.map(data => {
      const { product_id } = data;
      return (
        <ProductItem
          item={data}
          key={product_id}
          click={() => addToCart(data)}
        />
      )
    })
  }

  render() {
    return (
      <div className="products">
        <h2>Products</h2>
        <div className="products-list row col--lg-12">
          {this.renderProducts(products)}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => 
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        data: item
      }
    })
});
function mapStateToProps({ cart }) {
  return { cart }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
