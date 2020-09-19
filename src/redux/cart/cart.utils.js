//Here we can add any utility functions related to our cart redux code

export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem);
    }

};