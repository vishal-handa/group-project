const initialState={
    status:'idle',
    companies:null,
}

export default function companyReducer(state = initialState, action){
    switch (action.type){
        case 'RECEIVE_COMPANIES':{
            // console.log(action)
            return{
                ...state,
                companies:action.companies,
            }
        }
        default:{
            return state;
        }
    }
}
