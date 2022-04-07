import { FilterProvider } from "../Context/filterContext";
import { ModalProvider } from "../Context/modalContext";
import { AuthProvider } from "../Context/authContext";
import { CartProvider } from "../Context/cartContext";
import { AlertProvider } from "../Context/alertContext";
import { WishlistProvider } from "../Context/wishlistContext";

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FilterProvider>
        <ModalProvider>
          <CartProvider>
            <WishlistProvider>
              <AlertProvider>{children}</AlertProvider>
            </WishlistProvider>
          </CartProvider>
        </ModalProvider>
      </FilterProvider>
    </AuthProvider>
  );
};
