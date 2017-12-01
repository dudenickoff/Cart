import ACTIONS from '../actions';

export default function cart(state = [], action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      for(let i=0; i<state.length; i++){
        if(action.payload.data.product_id == state[i].product_id){
          state[i].qty++;
            return [...state];
        }
      }
    return [action.payload.data, ...state]

    case ACTIONS.REMOVE_FROM_CART:
      return state.filter(prod => prod.product_id !== action.payload.data.product_id);

    case ACTIONS.INCREASE_QUANTITY:
      return state.map((val, item) => { 
        (action.payload.data.product_id == state[item].product_id) ? state[item].qty++ : state[item].qty
          return val;
      });
    case ACTIONS.DECREASE_QUANTITY:
      return state.map((val, item) =>{
        (state[item].qty < 2) ? (val) :
         (val.product_id == action.payload.data.product_id) ? state[item].qty-- : state[item].qty
          return val
    });
  }

  return state
}