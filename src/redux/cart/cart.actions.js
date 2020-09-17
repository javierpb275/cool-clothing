//These are the actions (functions that return objects) related to our cart.

//TYPES:
import { CartActionTypes } from './cart.types';

//This action takes care of toggling the CartDropdown component:
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});