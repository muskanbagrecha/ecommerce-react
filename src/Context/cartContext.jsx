import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { useAuth } from "../CustomHooks/useAuth";
import { useModal } from "../CustomHooks/useModal";

const initialState = {
  items: [],
  totalCartAmount: 0,
  totalCartQuantity: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [showCartAlert, setShowCartAlert] = useState(false);
  const { authState } = useAuth();
  const { setShowModal } = useModal();

  const addToCart = (item) => {
    console.log("adding");
    if (authState.isAuthenticated) {
      //logic for add to cart - will add in next pr
    } else {
      setShowModal(true);
    }
  };

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
