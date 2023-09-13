const getFromLS = () => {
  const getData = localStorage.getItem("cart");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addToLS = (id) => {
  const cart = getFromLS();
  cart.push(id);
  saveCartToLS(cart);
};

export { addToLS, getFromLS };
