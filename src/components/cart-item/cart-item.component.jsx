//This component is the item that we will see in our cart dropdown list when we add it to our cart:

import React from 'react';

//STYLES:
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x $ {price}
            </span>
        </div>
    </div>
);

export default CartItem;