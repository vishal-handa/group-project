import {
  receiveProducts,
  receiveCategories,
  receiveCompanies,
} from "../../actions";

export const handleFetchProducts = (dispatch) => {
  return fetch("/products")
    .then((res) => res.json())
    .then((res) => dispatch(receiveProducts(res.data)));
};

export const handleFetchCategories = (dispatch) => {
  return fetch("/categories")
    .then((res) => res.json())
    .then((res) => dispatch(receiveCategories(res.data)));
};

export const handleFetchCompanies = (dispatch) => {
  return fetch("/companies")
    .then((res) => res.json())
    .then((data) => dispatch(receiveCompanies(data.data)));
};
