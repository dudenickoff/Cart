import ACTIONS from '../actions';

export default function products(state = [], action){
	switch(action.type){
		case ACTIONS.CHANGE_QUANTITY:
			return [action.payload.data, ...state];
	}
	return state;
}