//These are the selectors of our cart:
//Selector: code that gets a state as in the whole state object and then pulls off just a small portion or slice of that state 

//RESELECT:
import { createSelector } from 'reselect';



//selectCart input selector:
const selectCart = state => state.cart;


//selectCartItems output selector:
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//selectCartItemsCount output selector:
//This gives us back the total quantity of all the cart items:
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumulatedQuanttity, cartItem) => 
        accumulatedQuanttity + cartItem.quantity, 
        0)
);

//selectCartHidden output selector:
//This takes care of hiding or showing the cart-dropdown:
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//selectCartTotal output selector:
//This will add all of the price of our items together
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuanttity, cartItem) => 
        accumulatedQuanttity + cartItem.quantity * cartItem.price, 
        0)
);