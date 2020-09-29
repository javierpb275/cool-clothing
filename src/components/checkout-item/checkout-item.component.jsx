//This component is the cart-item that we have stored in our state (the items that we added to our cart) 
//which will be displayed in our checkout-page.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//ACTIONS:
import { clearItemFromCart } from '../../redux/cart/cart.actions';

//STYLES:
import './checkout-item.styles.scss';



const CheckoutItem = ({ cartItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>

        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>

        <div className='remove-button' onClick={() => clearItem(cartItem)}>
            &#10054;
        </div>

    </div>
    );
};



const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});



export default connect(null, mapDispatchToProps)(CheckoutItem);