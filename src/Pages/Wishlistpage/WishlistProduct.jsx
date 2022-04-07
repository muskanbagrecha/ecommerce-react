import { Card } from "../../Components/UI";
import { FaStar } from "react-icons/fa";
import { SolidHeart, Cart } from "../../Assets/Icons/icons";
import { useAuth, useAlert, useCart, useWishlist } from "../../CustomHooks/";

export const WishlistProduct = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, rating, inStock } =
    product;

  const { authState } = useAuth();
  const { removeFromWishlist, error } = useWishlist();
  const { setShowAlert } = useAlert();
  const { cartState, addToCart, updateCart } = useCart();
  const itemExistsInCart = cartState.items.some(
    (item) => item._id === product._id
  );
  const removeFromWishlistHandler = () => {
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
    }
  };

  const addToCartHandler = () => {
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
    }
  };

  const updateCartHandler = () => {
    updateCart({
      product,
      type: "increment",
      token: authState.token,
    });
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
                removeFromWishlistHandler();
                itemExistsInCart ? updateCartHandler() : addToCartHandler();
              }}
            >
              Add to Cart
              <Cart />
            </button>
            <button
              className="btn btn-outline full-width"
              onClick={removeFromWishlistHandler}
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
