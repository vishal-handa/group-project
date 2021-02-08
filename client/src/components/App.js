import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

import { receiveCategories, receiveItems, receiveCompanies } from '../actions';

import Cart from "./Cart";

import Home from "./Home";

import Menu from "./Menu";


const App = () => {
  const dispatch = useDispatch();

  const homePageState = useSelector(state=>state);
  console.log(homePageState);

  useEffect(() => {
    fetch('/categories')
      .then(res=>res.json())
      .then(res=>dispatch(receiveCategories(res.data)));
    fetch('./products')
      .then(res=>res.json())
      .then(res=>dispatch(receiveItems(res.data)))
  }, []);

  useEffect(() => {
    fetch("/companies")
      .then((res) => res.json())
      .then((data) => dispatch(receiveCompanies(data.data)))
  }, [])

  return (
    <BrowserRouter>
      <Wrapper>
        <Menu homePageState={homePageState}/>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products/:id">
            Individual product
          </Route>

          <Route path="/:category">
            Category
          </Route>

          <Route path="/company/:companyId">
            Company
          </Route>

        </Switch>
        {/* <Cart /> */}
      </Wrapper>
    </BrowserRouter>
  )

}

const Wrapper = styled.div` 
  display: flex;
  background-color:#FFFAF0;
  height:100vh;
  margin: 0;
  padding: 0;
`;

export default App;
