import { createStore } from "redux";

import combineReducers from "./reducers";

export default function configureStore(initialState) {
    const persistedState = localStorage.getItem('reduxState') 
                        ? JSON.parse(localStorage.getItem('reduxState'))
                        : {};
    const store = createStore(
        combineReducers,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    store.subscribe(()=>{
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    })
    return store;
}