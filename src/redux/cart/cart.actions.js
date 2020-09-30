//These are the actions (functions that return objects) related to our cart.

//TYPES:
import { CartActionTypes } from './cart.types';

//This action takes care of toggling the CartDropdown component:
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//This action takes care of adding items to the Cart:
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

//This action takes care of removing the item that we have in our checkout page.
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

//This action takes care of removing the items that we added from our cart:
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});