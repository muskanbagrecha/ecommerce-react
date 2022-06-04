import { useState } from "react";
import { Card } from "../../Components/UI";
import { FaStar } from "react-icons/fa";
import { SolidHeart, Cart } from "../../Assets/Icons/icons";
import { useCart, useWishlist } from "../../CustomHooks/";
import {
  removeFromWishlistHandler,
  addToCartHandler,
  updateCartHandler,
} from "../../Utils";

export const WishlistProduct = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, rating, inStock } =
    product;

  const { removeFromWishlist } = useWishlist();
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);
  const { cartState, addToCart, updateCart } = useCart();
  const itemExistsInCart = cartState.items.some(
    (item) => item._id === product._id
  );

  return (
    <Card className="card-vertical product-card">
      <div className="component-close">
        <span>
          <SolidHeart bgcolor="red" />
        </span>
      </div>
      <div className={!inStock ? "overlay-container" : ""}>
        <div className="card__img">
          <img src={image} alt={title} className="img-responsive" />
        </div>
        <div className="card__content">
          <div className="card__header">
            <h3 className="card__title">{title}</h3>
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
            <button
              className="btn btn-primary full-width"
              onClick={() => {
                itemExistsInCart
                  ? updateCartHandler(
                      { product, type: "increment" },
                      updateCart,
                      setIsCartDisabled
                    )
                  : addToCartHandler(product, addToCart, setIsCartDisabled);
              }}
            >
              Add to Cart
              <Cart />
            </button>
            <button
              className="btn btn-outline full-width"
              onClick={() => {
                removeFromWishlistHandler(
                  product,
                  removeFromWishlist,
                  setIsWishlistDisabled
                );
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {!inStock && <div className="overlay-text">Out of stock</div>}
    </Card>
  );
};
