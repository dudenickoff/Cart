import FlexboxGrid from 'flexbox-grid-sass/src/flexbox-grid.scss';
import normalize from 'normalize-scss/sass/normalize/_import-now.scss';
import styles from '../styles/main.scss';
import icon from '../../favicon.svg'
import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../containers/cart';
import Products from '../containers/products';
import Card from '../containers/card';

export default class App extends React.Component {
	render(){
		return (
			<div className="grid grid--container">
				<Cart />
				<Products />
				<Card />	
			</div>
		)
	}
}