import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { receiveCategories } from '../actions';
import Cart from "./Cart";
import Menu from "./Menu";

const App = () => {
  const dispatch = useDispatch();
  const theCategories = useSelector(state=>state);
  console.log(theCategories);
  useEffect(() => {
    fetch('/categories')
      .then(res=>res.json())
      .then(res=>dispatch(receiveCategories(res.data)))
  }, []);


  return (
    <BrowserRouter>
      <Wrapper>
        <Menu />
        <Switch>

          <Route exact path="/">
            Home
          </Route>

          <Route path="/product/:id">
            Individual product
          </Route>

          <Route path="/:category">
            Category
          </Route>

          <Route path="/company/:companyId">
            Company
          </Route>

        </Switch>
        <Cart />
      </Wrapper>
    </BrowserRouter>
  )

}

const Wrapper = styled.div` 
  display: flex;
`;

export default App;
