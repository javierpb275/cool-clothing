//This component is the cart-item that we have stored in our state (the items that we added to our cart) 
//which will be displayed in our checkout-page.

import React from 'react';

//STYLES:
import './checkout-item.styles.scss';



const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity} }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10054;</div>
    </div>
);



export default CheckoutItem;