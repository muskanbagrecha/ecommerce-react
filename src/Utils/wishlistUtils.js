export const addToWishlistHandler = (
  product,
  addToWishlist,
  setIsWishlistDisabled
) => {
    addToWishlist(product);
};

export const removeFromWishlistHandler = (
  product,
  removeFromWishlist,
  setIsWishlistDisabled
) => {
  removeFromWishlist(product);
  setIsWishlistDisabled(true);
};
