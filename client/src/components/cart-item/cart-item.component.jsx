//This component is the item that we will see in our cart dropdown list when we add it to our cart:

import React from 'react';

//STYLES:
import {CartItemContainer, ItemDetailsContainer, CartItemImage} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;