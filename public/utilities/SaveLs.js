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

const removeFromLS = (id) => {
  const cart = getFromLS();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

export { addToLS, getFromLS, removeFromLS };
