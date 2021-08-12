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


//This utility function  takes care of removing the item that we select from our cart. 
//If there is only 1 item, then we remove the whole item.
//If there are more than 1 item, then we just want to decrease the quantity.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem); 

}