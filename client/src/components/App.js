import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchProducts,
  handleFetchCategories,
  handleFetchCompanies,
} from "./helpers/fetch-request-helper";

import Menu from "./Menu";
import Routes from "./Routes";
import Footer from "./Footer";

const App = () => {
  const dispatch = useDispatch();

  const homePageState = useSelector((state) => state);
  // console.log(homePageState);
  // functions from fetch-request-FaHireAHelper.js to populate redux state
  useEffect(() => {
    handleFetchProducts(dispatch);
    handleFetchCategories(dispatch);
    handleFetchCompanies(dispatch);
    document.title = "BluCast || Get The Best Wearable Technology";
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Menu homePageState={homePageState} />
        <Routes homePageState={homePageState} />
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;

  margin: 0;
  padding: 0;
`;

export default App;
