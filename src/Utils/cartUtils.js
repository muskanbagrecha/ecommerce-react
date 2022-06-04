export const addToCartHandler = (product, addToCart, setIsCartDisabled) => {
  addToCart(product);
};

export const removeFromCartHandler = (
  product,
  removeFromCart,
  setIsCartDisabled
) => {
  removeFromCart(product);
  setIsCartDisabled(true);
};

export const updateCartHandler = (
  { product, type },
  updateCart,
  setIsCartDisabled
) => {
  updateCart(product, type);
  setIsCartDisabled(true);
};
