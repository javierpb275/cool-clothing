//This is the dropdown menu that is displayed when we click on the CartIcon component and it is a container that is scrollable
//and there we see the items that we have added to our cart and it has a button at the bottom to go to the Chekout page to pay for our items.

import React from 'react';

//REACT ROUTER
import { withRouter } from 'react-router-dom';

//REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCartItems } from '../../redux/cart/cart.selectors';

//ACTIONS:
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//COMPONENTS:
import CartItem from '../cart-item/cart-item.component';

//STYLES:
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));