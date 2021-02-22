import {
  loadingCategories,
  receiveProducts,
  errorCategories,
  loadingProducts,
  receiveCategories,
  errorProducts,
  loadingCompanies,
  receiveCompanies,
  errorCompanies,
} from "../../actions";

//fetch to populate the redux state for all products from the server with loading and error dispatch actions.
export const handleFetchProducts = (dispatch) => {
  dispatch(loadingProducts());
  return fetch("/products")
    .then((res) => res.json())
    .then((res) => dispatch(receiveProducts(res.data)))
    .catch(()=>dispatch(errorProducts()));
};

//fetch to populate the redux state for all categories from the server with loading and error dispatch actions.
export const handleFetchCategories = (dispatch) => {
  dispatch(loadingCategories());
  return fetch("/categories")
    .then((res) => res.json())
    .then((res) => dispatch(receiveCategories(res.data)))
    .catch(()=>dispatch(errorCategories()));
};

//fetch to populate the redux state for all companies from the server with loading and error dispatch actions.
export const handleFetchCompanies = (dispatch) => {
  dispatch(loadingCompanies());
  return fetch("/companies")
    .then((res) => res.json())
    .then((data) => dispatch(receiveCompanies(data.data)))
    .catch(()=>dispatch(errorCompanies()));
};
