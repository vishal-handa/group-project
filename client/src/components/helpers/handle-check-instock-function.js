// Handler used in ItemContainerBig and ItemContainerSmall
// Used to see if an item is avalaible to add to cart
// Image and button differs if item is out of stock

export const handleCheckInstock = (cartItems, item) => {
  let stockNum;
  if (cartItems[item._id]) {
    stockNum = item.numInStock - cartItems[item._id].numInCart;
  } else {
    stockNum = item.numInStock;
  }
  return stockNum;
};
