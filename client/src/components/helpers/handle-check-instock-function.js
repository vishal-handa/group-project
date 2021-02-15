export const handleCheckInstock = (cartItems, item) => {
  let stockNum;
  if (cartItems[item._id]) {
    stockNum = item.numInStock - cartItems[item._id].numInCart;
  } else {
    stockNum = item.numInStock;
  }
  return stockNum;
};
