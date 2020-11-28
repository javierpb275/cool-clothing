//This is the cart component, which is a shopping bag where we see the number of items we added to our cart. 
//And when we click on it, we display a dropdown menu where we see the image of our item, the quantity and the price.
//And we can access to the Checkout page where we pay for our items.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//ACTIONS:
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

//STYLES:
import {CartContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';



const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


//we are increasing the number of the cartIcon everytime a new item is added:
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);