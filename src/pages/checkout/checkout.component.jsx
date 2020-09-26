import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCartItems } from '../../redux/cart/cart.selectors';

//STYLES:
import './checkout.styles.scss';



const CheckoutPage = () => (
    <div className='checkout-page'>
        <div classname='checkout-header'>
            <div classname='header-block'>
                <span>Product</span>
            </div>
            <div classname='header-block'>
                <span>Description</span>
            </div>
            <div classname='header-block'>
                <span>Quantity</span>
            </div>
            <div classname='header-block'>
                <span>Price</span>
            </div>
            <div classname='header-block'>
                <span>Remove</span>
            </div>
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default CheckoutPage;