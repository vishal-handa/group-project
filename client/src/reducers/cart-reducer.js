const initialState={
    status:'idle',
    cartItems:null,
}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        default:{
            return state;
        }
    }
}