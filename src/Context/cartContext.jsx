import { createContext, useState } from "react";
import axios from "axios";
const initialState = {
  items: [],
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(initialState);
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);

  const addToCart = async ({ product, token }) => {
    try {
      setLoader(true);
      const response = await axios.post(
        "api/user/cart",
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
        setCartState({
          ...cartState,
          items: response.data.cart,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const updateCart = async ({ product, type, token }) => {
    try {
      setLoader(true);
      const response = await axios.post(
        `api/user/cart/${product._id}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setCartState({
          ...cartState,
          items: response.data.cart,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const removeFromCart = async ({ product, token }) => {
    console.log(product._id, token);
    try {
      setLoader(true);
      const response = await axios.delete(`api/user/cart/${product._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200 || response.status === 201) {
        setCartState({
          ...cartState,
          items: response.data.cart,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        updateCart,
        removeFromCart,
        loader,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
