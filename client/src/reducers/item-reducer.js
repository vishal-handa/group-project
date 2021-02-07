const initialState={
    status:'idle',
    items:null,
}

export default function itemReducer(state = initialState, action){
    switch (action.type){
        case 'RECEIVE_ITEMS':{
            // console.log(action)
            return{
                ...state,
                items:action.items,
            }
        }
        default:{
            return state;
        }
    }
}