import { useEffect } from "react";
import { useWishlist, useAuth } from "../../CustomHooks/";
import { WishlistProduct } from "./WishlistProduct";
import { Link } from "react-router-dom";
import "./Wishlistpage.css";

const Wishlistpage = () => {
  const { wishlistState } = useWishlist();
  const { items } = wishlistState;
  const totalWishlistItems = wishlistState.items.length;
  const {
    authState: { isAuthenticated },
  } = useAuth();

  const wishlistItems = items.map((item) => (
    <WishlistProduct key={item.id} product={item} />
  ));

  return (
    <div className="sub-container">
      <h1 className="styled-title">My Wishlist</h1>
      {isAuthenticated &&
        (totalWishlistItems > 0 ? (
          <div className="wishlist__container">{wishlistItems}</div>
        ) : (
          <div className="wishlist__empty-container">
            <p>No items in wishlist 😭</p>
            <Link to="/products">
              <button className="btn btn-primary">Shop Now</button>
            </Link>
          </div>
        ))}
      {!isAuthenticated && (
        <div className="wishlist__empty-container">
          <p>Please login to view your wishlist</p>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlistpage;
