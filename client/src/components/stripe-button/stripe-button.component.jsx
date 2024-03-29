//This is the button for the stripe payments:

import React from 'react';

//STRIPE:
import StripeCheckout from 'react-stripe-checkout';

//axios:
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_OcZ96a81MLOIGzj13mZWflIT00cQ1lgQCg';
    
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };

    return(
        <StripeCheckout
        label='Pay Now'
        name='COOL Clothing'
        billingAddress
        shippingAddress
        image='https://previews.123rf.com/images/yayayoy/yayayoy1709/yayayoy170900008/86751340-cool-palabra-letras-dise%C3%B1o-c%C3%B3mico-dibujado-a-mano-.jpg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

}



export default StripeCheckoutButton;