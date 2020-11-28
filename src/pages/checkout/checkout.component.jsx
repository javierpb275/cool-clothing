import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

//COMPONENTS:
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

//STYLES:
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer } from './checkout.styles';



const CheckoutPage = ({ cartItems, total }) => (

    <CheckoutPageContainer>

    <CheckoutHeaderContainer>

      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>

    </CheckoutHeaderContainer>

        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

        <TotalContainer>
           TOTAL: ${total}
        </TotalContainer>

        <StripeCheckoutButton price={total} />

    </CheckoutPageContainer>
);



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    total: selectCartTotal
});



export default connect(mapStateToProps)(CheckoutPage);