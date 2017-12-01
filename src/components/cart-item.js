import React from 'react';

export default function cartItem({props, increase, decrease, remove}) {
	return (
		<li>
			<span>{props.product_name}</span>
			<span> {props.product_cost} {props.product_currency}</span>
			<div>
				<button onClick={decrease}>-</button>
				<span> {props.qty} </span>
				<button onClick={increase}>+</button>
			</div>
			<span>{props.product_cost*props.qty} {props.product_currency}</span>
		<button onClick={remove}>-</button>
		</li>
	)
}