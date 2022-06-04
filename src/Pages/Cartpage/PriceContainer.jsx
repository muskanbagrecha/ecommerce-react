import { useNavigate } from "react-router-dom";
import { useCart } from "../../CustomHooks";
import { CouponContainer } from "./CouponContainer";
export const PriceContainer = () => {
  const { cartState } = useCart();
  const totalUniqueCartItems = cartState.items.length;
  const totalMRP = cartState.items.reduce((acc, curr) => {
    return acc + curr.oldPrice * curr.qty;
  }, 0);
  const totalDiscount = cartState.items.reduce((acc, curr) => {
    return acc + (curr.oldPrice - curr.price) * curr.qty;
  }, 0);
  const navigate = useNavigate();
  return (
    <div className="price__container">
      <h5>
        Price Details:
        {totalUniqueCartItems !== 0 ? `(${totalUniqueCartItems} items)` : null}
      </h5>
      <ul className="price__list no-list-style">
        <li>
          <span>Subtotal:</span>
          <span>₹{totalMRP}</span>
        </li>
        <li>
          <span>Discount</span>
          <span>₹{totalDiscount}</span>
        </li>
        <li>
          <span>Shipping</span>
          <span>
            <span className="strike-text">99</span>
            Free
          </span>
        </li>
        <li>
          <span>Total:</span>
          <span>₹{totalMRP - totalDiscount}</span>
        </li>
      </ul>
      <div className="CTA__container">
        <button
          className="btn btn-primary full-width"
          onClick={() => navigate("/address")}
        >
          Proceed to Checkout
        </button>
      </div>
      <CouponContainer />
    </div>
  );
};
