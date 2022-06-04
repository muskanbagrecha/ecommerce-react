import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFilter, useCart, useWishlist, useTitle } from "../../CustomHooks";
import "./SingleProductPage.css";
import spinner from "../../Assets/loader";
import { FaStar } from "react-icons/fa";
import { addToCartHandler, addToWishlistHandler } from "../../Utils/";

export const SingleProductPage = () => {
  useTitle("Product");
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
  const { items: cartItems } = cartState;
  const { addToCart } = useCart();
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);
  const { wishlistState, addToWishlist } = useWishlist();
  const { productid } = useParams();
  const [currentProduct, setCurrentProduct] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const productExistsInCart = cartItems.find((item) => item._id === productid);

  const productExistsInWishlist = wishlistState.items.find(
    (item) => item._id === productid
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          url: "/api/products",
          method: "GET",
        });
        if (response.status === 200 || response.status === 201) {
          filterDispatch({
            type: "SET_ITEMS",
            payload: response.data.products,
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (!filterState.items) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setCurrentProduct(filterState.items.find((item) => item._id === productid));
  }, [productid, currentProduct, filterState.items]);

  return (
    <div className="sub-container single-product-container grid-50-50">
      {loading ? (
        <>
          <div className="img-wrapper">
            <img src={currentProduct?.image} alt={currentProduct?.title} />
          </div>
          <div className="flex-col-center">
            <div className="flex-col-center product__header">
              <h2>{currentProduct?.title}</h2>
              <p className="gray-text border=">{currentProduct?.subtitle}</p>
              <div className="product__rating">
                <p>{currentProduct?.rating.value}</p>
                <FaStar /> | <span>{currentProduct?.rating.count}</span>
              </div>
            </div>
            <div className="product__amount flex-row-align-center">
              <h4>₹{currentProduct?.price}</h4>
              <p className="strike-text small-text gray-text">
                <del>₹{currentProduct?.oldPrice}</del>
              </p>
              <p className="red-text discount">{currentProduct?.discount}%</p>
            </div>
            <small>Inclusive of all taxes</small>
            <div className="product__CTA">
              {productExistsInCart ? (
                <button
                  className="btn btn-primary full-width"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <span>Go to Cart</span>
                </button>
              ) : (
                <button
                  className={`btn btn-primary full-width ${
                    isCartDisabled ? "disabled" : ""
                  }`}
                  onClick={() => {
                    addToCartHandler(
                      currentProduct,
                      addToCart,
                      setIsCartDisabled
                    );
                  }}
                >
                  <span>Add to Cart</span>
                </button>
              )}
              {productExistsInWishlist ? (
                <button
                  className="btn btn-outline full-width"
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                >
                  <span>Go to Wishlist</span>
                </button>
              ) : (
                <button
                  className="btn btn-outline full-width"
                  onClick={() =>
                    addToWishlistHandler(
                      currentProduct,
                      addToWishlist,
                      setIsWishlistDisabled
                    )
                  }
                >
                  Wishlist
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <img src={spinner} alt="loading" style={{ margin: "auto" }} />
      )}
    </div>
  );
};

// {
//   "_id": "2b154b32-6b53-4873-8149-e1b36c510413",
//   "title": "Red Bag",
//   "subtitle": "Textured bucket bag",
//   "image": "/static/media/bags1.9c8b65ac96c16f153ff7.webp",
//   "seller": "Dressberry",
//   "price": 1260,
//   "oldPrice": 2299,
//   "discount": 45,
//   "rating": {
//       "value": 4,
//       "count": 100
//   },
//   "categoryName": "Bags",
//   "inStock": true,
//   "id": "1"
// }
