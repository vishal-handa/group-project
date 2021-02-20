const initialState = {
  status: "idle",
  items: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_PRODUCTS':{
      return {
          ...state,
          status:'loading',
      }
    }
    case "RECEIVE_PRODUCTS": {
      // console.log(action)
      return {
        ...state,
        items: action.items,
        status:'idle',
      };
    }
    case 'ERROR':{
      return {
          ...state,
          status:'error',
      }
    }
    default: {
      return state;
    }
  }
}
