//TYPES:
import { CartActionTypes } from './cart.types'

//This is the initial state of this reducer:
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


//The cart reducer will take care of all the functionality of our cart-icon component:
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

            default:
                return state;
    }
}


export default cartReducer;