import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../CustomHooks";
const initialState = {
  items: [],
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(initialState);
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("user")?.token;

  const {
    authState: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (token) {
      getCartItems({
        token,
      });
    }
  }, [cartState, isAuthenticated]);

  const getCartItems = async ({ token }) => {
    setLoader(true);
    try {
      const res = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });
      setCartState({
        ...cartState,
        items: res.data.cart,
      });
      setLoader(false);
    } catch (err) {
      setLoader(false);
      setError(err.response.data.message);
      console.log(err.response);
    }
  };

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
      console.log(err.response);
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
      console.log(error.response);
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const removeFromCart = async ({ product, token }) => {
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
      console.log(error.response);
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const resetCart = () => {
    setCartState(initialState);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        getCartItems,
        addToCart,
        updateCart,
        removeFromCart,
        loader,
        error,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
