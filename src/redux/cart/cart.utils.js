//Here we can add any utility functions related to our cart redux code


//This utility function checks if we already have the item that we wanna add in our array, if we have it, then we increase the amount,
//if we don't have it, then we add that item to our array:
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];

};