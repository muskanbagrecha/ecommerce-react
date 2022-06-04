import { useCart, useAuth, useTitle } from "../../CustomHooks";
import { CartProduct } from "./CartProduct";
import { PriceContainer } from "./PriceContainer";
import { Link } from "react-router-dom";
import "./Cartpage.css";

export const Cartpage = () => {
  useTitle("Cart");
  const { cartState } = useCart();
  const totalUniqueCartItems = cartState.items.length;
  const cartCards = cartState.items.map((product) => {
    return <CartProduct key={product._id} product={product} />;
  });

  const {
    authState: { isAuthenticated },
  } = useAuth();

  return (
    <div className="sub-container">
      <h1 className="styled-title">My Cart</h1>
      {isAuthenticated &&
        (totalUniqueCartItems > 0 ? (
          <div className="grid-50-50 cart__container">
            <div className="left-content cart__items">{cartCards}</div>
            <div className="right-content cart__total">
              <PriceContainer />
            </div>
          </div>
        ) : (
          <div className="cart__empty-container">
            <p>No items in cart 😭</p>
            <Link to="/products">
              <button className="btn btn-primary">Shop Now</button>
            </Link>
          </div>
        ))}
      {!isAuthenticated && (
        <div className="cart__empty-container">
          <p>Please login to view your cart</p>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};
