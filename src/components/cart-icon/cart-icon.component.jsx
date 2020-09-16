//This is the cart component, which is a shopping bag where we see the number of items we added to our cart. 
//And when we click on it, we display a dropdown menu where we see the image of our item, the quantity and the price.
//And we can access to another page where we pay the items.

import React from 'react';

//ASSETS:
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//STYLES:
import '.cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

export default CartIcon;