import { useState, useEffect } from "react";
import { useCart, useWishlist } from "../../CustomHooks";
import {
  updateCartHandler,
  removeFromCartHandler,
  addToWishlistHandler,
} from "../../Utils";
import { Card } from "../../Components/UI";
import { FaStar } from "react-icons/fa";
import "./CartProduct.css";
export const CartProduct = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, rating } = product;
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);
  const { cartState, updateCart, removeFromCart, error } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const id = setTimeout(() => {
      setIsCartDisabled(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [isCartDisabled]);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsWishlistDisabled(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [isWishlistDisabled]);

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
              product.qty === 1 || isCartDisabled ? "disabled" : ""
            } `}
            onClick={() =>
              updateCartHandler(
                { product, type: "decrement" },
                updateCart,
                setIsCartDisabled
              )
            }
          >
            <i className="fa-solid fa-minus"></i>
          </span>
          <span className="quantity">
            {cartState.items.find((item) => item.id === product.id).qty}
          </span>
          <span
            className={`btn-icon ${isCartDisabled ? "disabled" : ""}`}
            onClick={() =>
              updateCartHandler(
                { product, type: "increment" },
                updateCart,
                setIsCartDisabled
              )
            }
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
        <div className="card__CTA">
          <button
            className="btn btn-primary full-width"
            onClick={() =>
              addToWishlistHandler(
                product,
                addToWishlist,
                setIsWishlistDisabled
              )
            }
          >
            Wishlist
          </button>
          <button
            className="btn btn-outline full-width"
            onClick={() =>
              removeFromCartHandler(product, removeFromCart, setIsCartDisabled)
            }
          >
            Remove Item
          </button>
        </div>
      </div>
    </Card>
  );
};
