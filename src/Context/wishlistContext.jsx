import { createContext, useState } from "react";
import axios from "axios";
const initialState = {
  items: [],
};

export const WishlistContext = createContext(initialState);

export const WishlistProvider = ({ children }) => {
  const [wishlistState, setWishlistState] = useState(initialState);
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);

  const getWishlistItems = async ({token}) => {
    try {
      setLoader(true);
      const response = await axios.get(
        "api/user/wishlist",
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setWishlistState({
          ...wishlistState,
          items: response.data.wishlist,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  }

  const addToWishlist = async ({ product, token }) => {
    try {
      setLoader(true);
      const response = await axios.post(
        "api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setWishlistState({
          ...wishlistState,
          items: response.data.wishlist,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const removeFromWishlist = async ({ product, token }) => {
    try {
      setLoader(true);
      const response = await axios.delete(`api/user/wishlist/${product._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200 || response.status === 201) {
        setWishlistState({
          ...wishlistState,
          items: response.data.wishlist,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const resetWishlist = () => {
    setWishlistState(initialState);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        getWishlistItems,
        addToWishlist,
        removeFromWishlist,
        resetWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
