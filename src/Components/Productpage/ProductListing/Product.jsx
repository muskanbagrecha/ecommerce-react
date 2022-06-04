import { Card } from "../../UI";
import { useCart, useWishlist } from "../../../CustomHooks/";
import { OutlinedHeart, SolidHeart, Cart } from "../../../Assets/Icons/icons";
import { FaStar } from "react-icons/fa";
import "./Product.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToCartHandler,
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "../../../Utils/";

const Product = ({ product }) => {
  const {
    _id,
    title,
    subtitle,
    price,
    oldPrice,
    image,
    discount,
    inStock,
    rating,
  } = product;
  const { cartState } = useCart();
  const { items: cartItems } = cartState;
  const { addToCart } = useCart();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { items: wishlistItems } = wishlistState;
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);
  const productExistsInCart = cartItems.find((item) => item._id === _id);
  const productExistsInWishlist = wishlistItems.find(
    (item) => item._id === _id
  );
  const navigate = useNavigate();

  return (
    <Card className="card-vertical product-card">
      {productExistsInWishlist ? (
        <div
          className="component-close"
          onClick={() =>
            removeFromWishlistHandler(
              product,
              removeFromWishlist,
              setIsWishlistDisabled
            )
          }
        >
          <span>
            <SolidHeart bgcolor="red" />
          </span>
        </div>
      ) : (
        <div
          className="component-close"
          onClick={() =>
            addToWishlistHandler(
              product,
              addToWishlist,
              setIsWishlistDisabled
            )``
          }
        >
          <span>
            <OutlinedHeart bgcolor="red" />
          </span>
        </div>
      )}
      <div
        className={!inStock ? "overlay-container" : ""}
        onClick={() => {
          navigate(`/products/${_id}`);
        }}
      >
        <div className="card__img">
          <img src={image} alt={title} className="img-responsive" />
        </div>
        <div className="card__content">
          <div className="card__header">
            <h4 className="card__title" onClick={() => navigate()}>
              {title}
            </h4>
            <p className="card__subtitle">{subtitle}</p>
          </div>
          <div className="flex-row-align-center">
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
          </div>
          <div className="card__CTA center-text">
            {productExistsInCart ? (
              <button
                className="btn btn-primary full-width"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/cart");
                }}
              >
                <span>Go to Cart</span>
                <Cart />
              </button>
            ) : (
              <button
                className={`btn btn-primary full-width ${
                  isCartDisabled ? "disabled" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCartHandler(product, addToCart, setIsCartDisabled);
                }}
              >
                <span>Add to Cart</span>
                <Cart />
              </button>
            )}
          </div>
        </div>
      </div>
      {!inStock && <div className="overlay-text">Out of stock</div>}
    </Card>
  );
};

export default Product;
