const initialState={
    status:'idle',
    categories:null,
}

export default function categoryReducer(state = initialState, action){
    switch (action.type){
        case 'LOADING_CATEGORIES':{
            return {
                ...state,
                status:'loading',
            }
        }
        case 'RECEIVE_CATEGORIES':{
            // console.log(action)
            return{
                ...state,
                categories:action.categories,
                status:'idle',
            }
        }
        case 'ERROR':{
            return {
                ...state,
                status:'error',
            }
        }
        default:{
            return state;
        }
    }
}