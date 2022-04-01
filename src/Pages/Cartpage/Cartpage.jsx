import { useEffect } from "react";
import { useCart, useAlert } from "../../CustomHooks";
import { CartProduct } from "./CartProduct";
import { Alert } from "../../Components/UI";
import { PriceContainer } from "./PriceContainer";
import { Link } from "react-router-dom";
import "./Cartpage.css";
const Cartpage = () => {
  const { cartState } = useCart();
  const { showAlert, setShowAlert } = useAlert();
  const totalUniqueCartItems = cartState.items.length;
  const cartCards = cartState.items.map((product) => {
    return <CartProduct key={product._id} product={product} />;
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setShowAlert({
        showAlert: false,
        alertMessage: null,
        type: null,
      });
    }, 2000);
    return () => clearTimeout(id);
  }, [cartState.items]);

  return (
    <div className="sub-container">
      <div className="flex-center">{showAlert.showAlert && <Alert />}</div>
      <h1 className="styled-title">My Cart</h1>
      {totalUniqueCartItems > 0 ? (
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
      )}
    </div>
  );
};

export default Cartpage;
