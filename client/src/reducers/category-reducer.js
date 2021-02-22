const initialState={
    status:'idle',
    categories:null,
}

export default function categoryReducer(state = initialState, action){
    switch (action.type){
        //initial action when the content is being fetched
        case 'LOADING_CATEGORIES':{
            return {
                ...state,
                status:'loading',
            }
        }
        //action after fetching to populate the state.
        case 'RECEIVE_CATEGORIES':{
            // console.log(action)
            return{
                ...state,
                categories:action.categories,
                status:'idle',
            }
        }
        //action if there is an error in fetching.
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