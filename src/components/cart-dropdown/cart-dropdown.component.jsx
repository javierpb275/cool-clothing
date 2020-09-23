//This is the dropdown menu that is displayed when we click on the CartIcon component and it is a container that is scrollable
//and there we see the items that we have added to our cart and it has a button at the bottom to go to the Chekout page to pay for our items.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//SELECTORS:
import { selectCartItems } from '../../redux/cart/cart.selectors';

//COMPONENTS:
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

//STYLES:
import './cart-dropdown.styles.scss';



const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => 
                <CartItem key={item.id} item={item}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);