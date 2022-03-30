import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { useAuth } from "../CustomHooks/useAuth";
import { useModal } from "../CustomHooks/useModal";

const initialState = {
  items: []
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(initialState);
  const [showCartAlert, setShowCartAlert] = useState(false);
  const { authState } = useAuth();
  const { setShowModal } = useModal();

  const addToCart = (product) => {
    if (authState.isAuthenticated) {
      
      if(cartState.items.find(item => item._id === product._id))
      {
        setShowCartAlert(true);
        setTimeout(() => {
          setShowCartAlert(false);
        }, 2000);
      }

    } else {
      setShowModal(true);
    }
  };

  return (
    <CartContext.Provider value={{ cartState, setCartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
