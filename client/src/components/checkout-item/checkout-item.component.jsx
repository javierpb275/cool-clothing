//This component is the cart-item that we have stored in our state (the items that we added to our cart) 
//which will be displayed in our checkout-page.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//ACTIONS:
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

//STYLES:
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item.styles';



const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeItem(cartItem)}>&#10134;</div>
          <span>{quantity}</span>
          <div onClick={() => addItem(cartItem)}>&#10133;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
            &#10054;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
    );
};




const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});



export default connect(null, mapDispatchToProps)(CheckoutItem);