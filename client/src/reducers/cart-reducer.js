const initialState={}

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case "ADD_TO_CART" :{
            console.log(action)
            return {
                    ...state,
                    [action.item._id]:{
                        ...action.item, 
                        numInCart: state[action.item._id] ? state[action.item._id].numInCart + 1 : 1,
                    }
            }
        }
        default:{
            return state;
        }
    }
}