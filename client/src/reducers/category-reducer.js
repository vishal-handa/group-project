const initialState={
    status:'idle',
    categories:null,
}

export default function categoryReducer(state = initialState, action){
    switch (action.type){
        case 'RECEIVE_CATEGORIES':{
            // console.log(action)
            return{
                ...state,
                categories:action.categories,
            }
        }
        default:{
            return state;
        }
    }
}