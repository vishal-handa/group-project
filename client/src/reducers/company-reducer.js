const initialState={
    status:'idle',
    companies:null,
}

export default function companyReducer(state = initialState, action){
    switch (action.type){
        case 'LOADING_COMPANIES':{
            return {
                ...state,
                status:'loading',
            }
        }
        case 'RECEIVE_COMPANIES':{
            // console.log(action)
            return{
                ...state,
                companies:action.companies,
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
