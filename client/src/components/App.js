import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchProducts,
  handleFetchCategories,
  handleFetchCompanies,
} from "./helpers/fetch-request-helper";
import SelectedCompanyPage from "./SelectedCompanyPage";
import SelectedCategoryPage from "./SelectedCategoryPage";
import AllProductPage from "./AllProductPage";

import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";

import ItemContainerBig from './ItemContainerBig';
import ConfirmationPage from './ConfirmationPage';
import Footer from './Footer';


const App = () => {
  const dispatch = useDispatch();

  const homePageState = useSelector((state) => state);
  // console.log(homePageState);
  // functions from fetch-request-FaHireAHelper.js to populate redux state
  useEffect(() => {
    handleFetchProducts(dispatch);
    handleFetchCategories(dispatch);
    handleFetchCompanies(dispatch);
    document.title="BluCast || Get The Best Wearable Technology";
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Menu homePageState={homePageState} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <AllProductPage />
          </Route>
          <Route path="/products/:id">
            <ItemContainerBig />
          </Route>
          <Route exact path="/categories" />
          <Route path="/categories/:category">
            <SelectedCategoryPage />
          </Route>
          <Route exact path="/companies" />
          <Route path="/companies/:company">
            <SelectedCompanyPage />
          </Route>
          <Route exact path="/cart">
            {homePageState.cart && <Cart />}
          </Route>
          <Route exact path="/confirmation">
            <ConfirmationPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
};


const Wrapper = styled.div` 
  height:100vh;

  margin: 0;
  padding: 0;
`;

export default App;
