export const receiveCategories = (categories) => ({
  type: "RECEIVE_CATEGORIES",
  categories,
});

export const receiveProducts = (items) => ({
  type: "RECEIVE_PRODUCTS",
  items,
});

export const receiveCompanies = (companies) => ({
  type: "RECEIVE_COMPANIES",
  companies,
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  item,
});

export const clearCart = (item) => ({
  type: "CLEAR_CART",
  item,
});

export const changeCartQuantity = (item, quantityInCart) => ({
  type: "CHANGE_CART_QUANTITY",
  item,
  quantityInCart,
});
