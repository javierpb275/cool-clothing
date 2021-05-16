//TYPES:
import { CartActionTypes } from './cart.types';

//UTILITY FUNCTIONS:
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils';

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
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
            default:
                return state;
    }
}


export default cartReducer;