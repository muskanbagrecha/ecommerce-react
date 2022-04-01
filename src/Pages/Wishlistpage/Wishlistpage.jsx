import { useEffect } from "react";
import { useWishlist, useAlert } from "../../CustomHooks/";
import { WishlistProduct } from "./WishlistProduct";
import { Alert } from "../../Components/UI";
import { Link } from "react-router-dom";
import "./Wishlistpage.css";
const Wishlistpage = () => {
  const { wishlistState, removeFromWishlist } = useWishlist();
  const { showAlert, setShowAlert } = useAlert();
  const { items } = wishlistState;
  const totalWishlistItems = wishlistState.items.length;

  const wishlistItems = items.map((item) => (
    <WishlistProduct key={item.id} product={item} />
  ));

  useEffect(() => {
    const id = setTimeout(() => {
      setShowAlert({
        showAlert: false,
        alertMessage: null,
        type: null,
      });
    }, 2000);
    return () => clearTimeout(id);
  }, [wishlistState.items]);

  return (
    <div className="sub-container">
      <div className="flex-center">{showAlert.showAlert && <Alert />}</div>
      <h1 className="styled-title">My Wishlist</h1>
      {totalWishlistItems > 0 ? (
        <div className="wishlist__container">{wishlistItems}</div>
      ) : (
        <div className="wishlist__empty-container">
          <p>No items in wishlist 😭</p>
          <Link to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlistpage;
