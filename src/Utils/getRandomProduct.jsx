const getRandomProduct = (obj) => {
  const keys = Object.keys(obj);
  const randomProduct = [];
  randomProduct[0] = obj[keys[Math.floor(Math.random() * keys.length)]];
  randomProduct[1] = obj[keys[Math.floor(Math.random() * keys.length)]];
  if (
    randomProduct[0].id === randomProduct[1].id ||
    !randomProduct[0].inStock ||
    !randomProduct[1].inStock
  ) {
    return getRandomProduct(obj);
  }
  return randomProduct;
};

export { getRandomProduct };
