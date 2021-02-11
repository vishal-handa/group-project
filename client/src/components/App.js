import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

import { receiveCategories, receiveItems, receiveCompanies } from '../actions';
import SelectedCompanyPage from "./SelectedCompanyPage";
import SelectedCategoryPage from "./SelectedCategoryPage";

import AllProductPage from "./AllProductPage";

import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import ItemContainerBig from './ItemContainerBig';

const App = () => {
  const dispatch = useDispatch();

  const homePageState = useSelector(state=>state);
  // console.log(homePageState);
  const [theEvent, setTheEvent] = useState(0);

  useEffect(() => {
    fetch('/categories')
      .then(res=>res.json())
      .then(res=>dispatch(receiveCategories(res.data)));

    fetch("/companies")
    .then((res) => res.json())
    .then((data) => dispatch(receiveCompanies(data.data)))
  }, []);

  useEffect(() => {
    fetch('/products')
    .then(res=>res.json())
    .then(res=>dispatch(receiveItems(res.data)));
  }, [theEvent]);

  const handleTarget=(ev)=>{
    const clickId=ev.target.id;
    if(clickId==="cartButton"){
        setTheEvent(theEvent+1);
    }
}

  return (
    <Wrapper>
      <BrowserRouter>
        <Menu homePageState={homePageState}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <AllProductPage handleTarget={handleTarget}/>
          </Route>
          <Route path="/products/:id">
            <ItemContainerBig />
          </Route>
          <Route exact path="/categories">
            All of categories
          </Route>
          <Route path="/categories/:category">
            <SelectedCategoryPage />
          </Route>
          <Route exact path="/companies">
            All of our brands
          </Route>
          <Route path="/companies/:company">
            <SelectedCompanyPage />
          </Route>
          <Route exact path="/cart">
            {homePageState.cart && <Cart />}
          </Route>
        </Switch>
      </BrowserRouter>
    </Wrapper>
    
  )

}

const Wrapper = styled.div` 
  /* display: flex; */

  height:100vh;
  margin: 0;
  padding: 0;
`;

export default App;
