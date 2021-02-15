import { combineReducers } from "redux";
import categories from "./category-reducer";
import cart from "./cart-reducer";
import items from "./product-reducer";
import companies from "./company-reducer";

export default combineReducers({ categories, cart, items, companies });
