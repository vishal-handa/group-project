import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);


  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>

          <Route exact path="/">
            Home
          </Route>

          <Route exact path="/product/:id">
            Individual product
          </Route>

          <Route exact path="/:category">
            Category
          </Route>

          <Route exact path="/company/:companyId">
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
