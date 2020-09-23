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
export const selectcartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuanttity, cartItem) => accumulatedQuanttity + cartItem.quantity, 0)
)
