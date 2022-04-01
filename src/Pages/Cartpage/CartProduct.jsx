import { useState, useEffect } from "react";
import { useCart, useAuth, useAlert } from "../../CustomHooks";
import { Card } from "../../Components/UI";
import { FaStar } from "react-icons/fa";
import "./CartProduct.css";
export const CartProduct = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, rating } = product;
  const [isDisabled, setIsDisabled] = useState(false);
  const { cartState, updateCart, removeFromCart, error } = useCart();
  const { setShowAlert } = useAlert();
  const { authState } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, [isDisabled]);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setShowAlert({
  //       showAlert: false,
  //       alertMessage: null,
  //       type: null,
  //     });
  //   }, 2000);
  //   return () => clearTimeout(id);
  // }, [cartState.items]);

  const qtyIncrementHandler = () => {
    updateCart({
      product,
      type: "increment",
      token: authState.token,
    });
    setIsDisabled(true);
    if (error) {
      setShowAlert({
        showAlert: true,
        alertMessage: error,
        type: "danger",
      });
    } else {
      setShowAlert({
        showAlert: true,
        alertMessage: "Quantity Increased Successfully!",
        type: "success",
      });
    }
  };

  const qtyDecrementHandler = () => {
    updateCart({
      product,
      type: "decrement",
      token: authState.token,
    });
    setIsDisabled(true);
    if (error) {
      setShowAlert({
        showAlert: true,
        alertMessage: error,
        type: "danger",
      });
    } else {
      setShowAlert({
        showAlert: true,
        alertMessage: "Quantity Decreased Successfully!",
        type: "success",
      });
    }
  };

  const deleteItemHandler = () => {
    removeFromCart({ product, token: authState.token })
    if(error)
    {
      setShowAlert({
        showAlert: true,
        alertMessage: error,
        type: "danger",
      });
    }
    else{
      setShowAlert({
        showAlert: true,
        alertMessage: "Item Deleted Successfully!",
        type: "success",
      });
    }
  }

  return (
    <Card className="card-horizontal cart-card">
      <div className="card__img">
        <img src={image} alt={title} className="img-responsive" />
      </div>
      <div className="card__content">
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle">{subtitle}</p>
        </div>
        <div className="card__amount">
          <h4>₹{price}</h4>
          <p className="strike-text small-text gray-text">
            <del>₹{oldPrice}</del>
          </p>
          <p className="red-text discount">{discount}%</p>
        </div>
        <div className="card__rating">
          <p>{rating.value}</p>
          <FaStar />
        </div>
        <div className="card__quantity">
          <span
            className={`btn-icon ${
              product.qty === 1 || isDisabled ? "disabled" : ""
            } `}
            onClick={qtyDecrementHandler}
          >
            <i className="fa-solid fa-minus"></i>
          </span>
          <span className="quantity">
            {cartState.items.find((item) => item.id === product.id).qty}
          </span>
          <span className="btn-icon" onClick={qtyIncrementHandler}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
        <div className="card__CTA">
          <button className="btn btn-primary full-width">Wishlist</button>
          <button
            className="btn btn-outline full-width"
            onClick={() => deleteItemHandler()}
          >
            Remove Item
          </button>
        </div>
      </div>
    </Card>
  );
};
