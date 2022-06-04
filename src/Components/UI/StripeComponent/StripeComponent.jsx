import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "./PaymentForm";
export const StripeComponent = () => {
  const PUB_KEY =
    "pk_test_51L2H1ZSAk1c7RbJEuHARsp3tlfSzvP3rHZ3xfqL5ELnd3Xq4eLQ0yg6kPx6gZq8dCyHKNU11Qh9Fh8brysKdHcdw00tow39wu2";

  const stripeTestPromise = loadStripe(PUB_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};
