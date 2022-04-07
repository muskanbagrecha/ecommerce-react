import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Productpage from "../Pages/Productpage/Productpage";
import Cartpage from "../Pages/Cartpage/Cartpage";
import Wishlistpage from "../Pages/Wishlistpage/Wishlistpage";
import Loginpage from "../Pages/Loginpage/Loginpage";
import Signuppage from "../Pages/Signuppage/Signuppage";
import Userpage from "../Pages/Userpage/Userpage";
import MockAPI from "../Pages/Mockapi/MockAPI";
import NotFound from "../Pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/wishlist" element={<Wishlistpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/mockapi" element={<MockAPI />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
