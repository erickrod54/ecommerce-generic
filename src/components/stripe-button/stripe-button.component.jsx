import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HxlQwGTATKH0HUHNxTKSa7XetkyayEPg0WYITXXbE7Y6aLR0Gt5eiol5bX8BsUin5TTckj8fO1QNqY3r7YOHIa800FY9tr1R3'

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful');
  }

return(
  <StripeCheckout 
    label='Pay Now'
    name='CRWN Clothing Ltd'
    billingAddress
    shippingAddress
    image= 'https://sendeyo.com/up/d/f3eb2117da'
    description={`Your total is $${price}`}
    ammount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
);
};

export default StripeCheckoutButton;