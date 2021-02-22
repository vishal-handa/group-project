const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log(action);
      // adding items to cart 
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          numInCart: state[action.item._id]
            ? state[action.item._id].numInCart + 1
            : 1,
        },
      };
    }

    case "CHANGE_CART_QUANTITY": {
      console.log(action.quantityInCart);
      // when the quantity is updated, this action changes the cart state
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          numInCart: action.quantityInCart,
        },
      };
    }

    case "REMOVE_FROM_CART": {
      //this action runs when the quantity becomes zero or if the item is removed
      console.log(action);
      const removeItemId = action.item._id;
      const stateCopy = { ...state };
      delete stateCopy[removeItemId];
      return stateCopy;
    }

    case "CLEAR_CART": {
      //cleans the whole cart
      console.log(action);
      const stateCopy = [];
      return stateCopy;
    }

    default: {
      return state;
    }
  }
}
