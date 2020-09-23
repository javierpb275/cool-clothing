//These are the selectors of our cart:
//Selector: code that gets a state as in the whole state object and then pulls off just a small portion or slice of that state 

//RESELECT:
import { createSelector } from 'reselect';



//input selector:
const selectCart = state => state.cart;


//output selector:
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);
