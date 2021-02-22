const initialState = {
  status: "idle",
  items: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    //action while list of products is being fetched.
    case 'LOADING_PRODUCTS':{
      return {
          ...state,
          status:'loading',
      }
    }
    //action after fetching to populate the state.
    case "RECEIVE_PRODUCTS": {
      // console.log(action)
      return {
        ...state,
        items: action.items,
        status:'idle',
      };
    }
    //action if there is an error in fetching.
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
