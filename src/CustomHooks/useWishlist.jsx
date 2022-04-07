import { useContext } from "react";
import { WishlistContext } from "../Context/wishlistContext";

export const useWishlist = () => useContext(WishlistContext);