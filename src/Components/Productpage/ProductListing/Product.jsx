import { Card } from "../../UI";
import {
  useAuth,
  useModal,
  useAlert,
  useCart,
  useWishlist,
} from "../../../CustomHooks/";
import { OutlinedHeart, SolidHeart, Cart } from "../../../Assets/Icons/icons";
import { FaStar } from "react-icons/fa";
import "./Product.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const { authState } = useAuth();
  const { setShowModal } = useModal();
  const { cartState } = useCart();
  const { items: cartItems } = cartState;
  const { setShowAlert } = useAlert();
  const { addToCart, error } = useCart();
  const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { items: wishlistItems } = wishlistState;
  const [isDisabled, setIsDisabled] = useState(false);
  const productExistsInCart = cartItems.find((item) => item._id === _id);
  const productExistsInWishlist = wishlistItems.find(
    (item) => item._id === _id
  );
  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (authState.isAuthenticated) {
      addToCart({ product, token: authState.token });
      if (error) {
        setShowAlert({
          showAlert: true,
          alertMessage: error,
          type: "danger",
        });
      } else {
        setShowAlert({
          showAlert: true,
          alertMessage: "Product added to cart successfully!",
          type: "success",
        });
        setIsDisabled(true);
      }
    } else {
      setShowModal(true);
    }
  };

  const addToWishlistHandler = () => {
    if (authState.isAuthenticated) {
      addToWishlist({ product, token: authState.token });
      if (error) {
        setShowAlert({
          showAlert: true,
          alertMessage: error,
          type: "danger",
        });
      } else {
        setShowAlert({
          showAlert: true,
          alertMessage: "Product added to wishlist successfully!",
          type: "success",
        });
        setIsDisabled(true);
      }
    } else {
      setShowModal(true);
    }
  };

  const removeFromWishlistHandler = () => {
    if (authState.isAuthenticated) {
      removeFromWishlist({ product, token: authState.token });
      if (error) {
        setShowAlert({
          showAlert: true,
          alertMessage: error,
          type: "danger",
        });
      } else {
        setShowAlert({
          showAlert: true,
          alertMessage: "Product removed from wishlist successfully!",
          type: "success",
        });
        setIsDisabled(true);
      }
    } else {
      setShowModal(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowAlert({
        showAlert: false,
        alertMessage: null,
        type: null,
      });
      setIsDisabled(false);
    }, 2000);
  }, [cartItems]);

  return (
    <Card className="card-vertical product-card">
      {productExistsInWishlist ? (
        <div className="component-close" onClick={removeFromWishlistHandler}>
          <span>
            <SolidHeart bgcolor="red" />
          </span>
        </div>
      ) : (
        <div className="component-close" onClick={addToWishlistHandler}>
          <span>
            <OutlinedHeart bgcolor="red" />
          </span>
        </div>
      )}
      <div className={!inStock ? "overlay-container" : ""}>
        <div className="card__img">
          <img src={image} alt={title} className="img-responsive" />
        </div>
        <div className="card__content">
          <div className="card__header">
            <h4 className="card__title">{title}</h4>
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
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <span>
                Go to Cart
                </span>
                <Cart />
              </button>
            ) : (
              <button
                className={`btn btn-primary full-width ${
                  isDisabled ? "disabled" : ""
                }`}
                onClick={addToCartHandler}
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
