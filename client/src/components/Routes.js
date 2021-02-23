import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AllProductPage from "./AllProductPage";
import SelectedCompanyPage from "./SelectedCompanyPage";
import SelectedCategoryPage from "./SelectedCategoryPage";
import Cart from "./Cart";
import ItemContainerBig from "./ItemContainerBig";
import ConfirmationPage from "./ConfirmationPage";

// Switch, Route in own component for better organization
const Routes = ({ homePageState }) => {
  return (
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
  );
};

export default Routes;
