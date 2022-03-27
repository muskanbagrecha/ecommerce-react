import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./Context/filterContext";
import { ModalProvider } from "./Context/modalContext";
import { AuthProvider } from "./Context/authContext";
import { CartProvider } from "./Context/cartContext";
import { AlertProvider } from "./Context/alertContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ModalProvider>
          <AuthProvider>
            <CartProvider>
              <AlertProvider>
                <App />
              </AlertProvider>
            </CartProvider>
          </AuthProvider>
        </ModalProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
