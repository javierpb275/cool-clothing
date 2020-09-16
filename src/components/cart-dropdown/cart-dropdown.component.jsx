//This is the dropdown menu that is displayed when we click on the CartIcon component and it is a container that is scrollable
//and there we see the items that we have added to our cart and it has a button at the bottom to go to the Chekout page to pay for our items.

import React from 'react';

//COMPONENTS:
import CustomButton from '../custom-button/custom-button.component';

//STYLES:
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;