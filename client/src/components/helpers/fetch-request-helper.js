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

export const handleFetchProducts = (dispatch) => {
  dispatch(loadingProducts());
  return fetch("/products")
    .then((res) => res.json())
    .then((res) => dispatch(receiveProducts(res.data)))
    .catch(()=>dispatch(errorProducts()));
};

export const handleFetchCategories = (dispatch) => {
  dispatch(loadingCategories());
  return fetch("/categories")
    .then((res) => res.json())
    .then((res) => dispatch(receiveCategories(res.data)))
    .catch(()=>dispatch(errorCategories()));
};

export const handleFetchCompanies = (dispatch) => {
  dispatch(loadingCompanies());
  return fetch("/companies")
    .then((res) => res.json())
    .then((data) => dispatch(receiveCompanies(data.data)))
    .catch(()=>dispatch(errorCompanies()));
};
