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
import { WishlistProvider } from "./Context/wishlistContext";
import { AppProvider } from "./Provider/AppProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
