import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const handleCheckout = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
      <form className="mx-auto w-1/4" onSubmit={handleCheckout}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    </div>
  );
}
