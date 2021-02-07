import { combineReducers } from "redux";

import categories from "./category-reducer";
import cart from "./cart-reducer";
import companies from "./company-reducer";

export default combineReducers({ categories, cart, companies });