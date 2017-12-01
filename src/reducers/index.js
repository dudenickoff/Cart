import { combineReducers } from 'redux'
// import { cartReducer } from 'react-redux-shopping-cart'
import cartReducer from './cart';
import productsReducer from './products'

// const rootReducer = () =>
// 	combineReducers({
// 		cart: cartReducer,
// 		products: productsReducer
// 	});
//
// export default rootReducer;

export default combineReducers({
  cart: cartReducer,
  products: productsReducer
})
