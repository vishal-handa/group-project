const initialState={
    status:'idle',
    categories:null,
}

export default function categoryReducer(state = initialState, action){
    switch (action.type){
        default:{
            return state;
        }
    }
}