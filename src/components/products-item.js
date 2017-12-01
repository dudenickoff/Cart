import React from 'react'

export default function ProductsListItem({ item, click }) {
  return (
    <div className="products-list-item col col--lg-3">
      <img src={item.product_image} alt="product image" />
      <span>{item.product_name}</span>
      <span>
        {item.product_cost} {item.product_currency}
      </span>
      <button onClick={click}>Add to Cart</button>
    </div>
  )
}
