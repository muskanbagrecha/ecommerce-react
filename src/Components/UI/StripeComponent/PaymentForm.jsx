import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./StripeComponent.css";
import axios from "axios";
import { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87BBFD",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
  },
};

export const PaymentForm = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await axios.post("/api/payment", { id });
        if (data.success) {
          setPaymentSuccessful(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <div className="sub-container">
      {paymentSuccessful ? (
        <h1>Payment Successful! Congratulations on your order. </h1>
      ) : (
        <form onSubmit={formSubmitHandler}>
          <fieldset className="form-group">
            <div className="form-row">
              <CardElement options={CARD_OPTIONS} />
            </div>
            <button className="btn btn-primary">Pay</button>
          </fieldset>
        </form>
      )}
    </div>
  );
};
