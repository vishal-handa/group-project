import { combineReducers } from "redux";

import categories from "./category-reducer";
import cart from "./cart-reducer";

export default combineReducers({ categories, cart });