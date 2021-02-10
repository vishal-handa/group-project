const initialState={
    status:'idle',
    cartItems: [],
}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case "ADD_TO_CART" :{
           return {
                ...state,
                cartItems: [
                    ...state.cartItems, action.item
                ]
           }
        }
        default:{
            return state;
        }
    }
}