const initialState = {
  status: "idle",
  items: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_PRODUCTS": {
      // console.log(action)
      return {
        ...state,
        items: action.items,
      };
    }
    default: {
      return state;
    }
  }
}
