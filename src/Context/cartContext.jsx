import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth, useModal, useToast } from "../CustomHooks";
const initialState = {
  items: [],
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(initialState);
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);

  const {
    authState: { isAuthenticated, token },
  } = useAuth();

  const { setShowModal } = useModal();
  const { addSuccessToast, addDangerToast, addInfoToast } = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      getCartItems({
        token,
      });
    }
  }, [cartState.items.length, isAuthenticated]);

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
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response);
    } finally {
      setLoader(false);
    }
  };

  const addToCart = async (product) => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      try {
        const response = await axios.post(
          "/api/user/cart",
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
          addSuccessToast("Product added to cart successfully!");
        }
      } catch (err) {
        console.log(err);
        addDangerToast("Something went wrong!");
      } finally {
        setLoader(false);
      }
    }
  };

  const updateCart = async (product, type) => {
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
        type === "increment"
          ? addSuccessToast("Product quantity increased successfully!")
          : addInfoToast("Product quantity decreased successfully!");
      }
    } catch (err) {
      console.log(error.response);
      addDangerToast("Something went wrong!");
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  const removeFromCart = async (product) => {
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
        addInfoToast("Product removed from cart successfully!");
      }
    } catch (err) {
      console.log(error.response);
      addDangerToast("Something went wrong!");
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
