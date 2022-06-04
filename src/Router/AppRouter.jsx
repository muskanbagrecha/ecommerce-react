import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Cartpage,
  Productpage,
  Wishlistpage,
  Loginpage,
  Signuppage,
  Userpage,
  NotFound,
  Addresspage,
  SingleProductPage,
} from "../Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/products/:productid" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/wishlist" element={<Wishlistpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/address" element={<Addresspage />} />
      <Route path="/mockapi" element={<MockmanEs />} />
      <Route path="/checkout" element={<h1>Thank you for shopping!</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
