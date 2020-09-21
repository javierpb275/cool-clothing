//This is the cart component, which is a shopping bag where we see the number of items we added to our cart. 
//And when we click on it, we display a dropdown menu where we see the image of our item, the quantity and the price.
//And we can access to the Checkout page where we pay for our items.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//ACTIONS:
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//ASSETS:
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//STYLES:
import './cart-icon.styles.scss';



const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToProps = ({ cart: { cartItems } }) => ({
    
});


export default connect(null, mapDispatchToProps)(CartIcon);