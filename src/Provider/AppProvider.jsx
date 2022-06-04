import { FilterProvider } from "../Context/filterContext";
import { ModalProvider } from "../Context/modalContext";
import { AuthProvider } from "../Context/authContext";
import { CartProvider } from "../Context/cartContext";
import { AlertProvider } from "../Context/alertContext";
import { WishlistProvider } from "../Context/wishlistContext";
import { ToastProvider } from "../Context/toastContext";
import { AddressProvider } from "../Context/addressContext";

export const AppProvider = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <FilterProvider>
          <ModalProvider>
            <CartProvider>
              <WishlistProvider>
                <AddressProvider>
                  <AlertProvider>{children}</AlertProvider>
                </AddressProvider>
              </WishlistProvider>
            </CartProvider>
          </ModalProvider>
        </FilterProvider>
      </AuthProvider>
    </ToastProvider>
  );
};
