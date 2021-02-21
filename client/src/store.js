import { createStore } from "redux";
import { loadState, saveState } from "./localstorage";
import combineReducers from "./reducers";

export default function configureStore() {
    const persistedState = loadState();
    const store = createStore(
        combineReducers,
        persistedState,
        // initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    store.subscribe(() => {
        saveState(store.getState())
    });
    return store;
}