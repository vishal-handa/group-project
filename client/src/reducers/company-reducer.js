const initialState={
    status:'idle',
    companies:null,
}

export default function companyReducer(state = initialState, action){
    switch (action.type){
        //action while list of companies is being fetched.
        case 'LOADING_COMPANIES':{
            return {
                ...state,
                status:'loading',
            }
        }
        //action after fetching to populate the state.
        case 'RECEIVE_COMPANIES':{
            // console.log(action)
            return{
                ...state,
                companies:action.companies,
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
