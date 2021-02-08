import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Menu = ({homePageState}) => {
  
  // assemble array of categories
  let listOfCategories = homePageState.categories.categories;

  // assemble array of companies
  let listOfCompanies = []

  if (homePageState.companies.companies) {
    listOfCompanies = Object.values(homePageState.companies.companies)
  }

  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [companyIsActive, setCompanyIsActive] = useState(false);

  const onClickCategory = () => {
    setCategoryIsActive(!categoryIsActive);
    setCompanyIsActive(false);
  }

  const onClickCompany = () => {
    setCompanyIsActive(!companyIsActive);
    setCategoryIsActive(false);
  }
    
  return (
    <Wrapper>

      <MenuItemContainer>
        <Link to="/products">
          <MenuItem>
            <MenuText>Shop all products</MenuText>
          </MenuItem>
        </Link>
      </MenuItemContainer>

      <MenuItemContainer>
        <CategoryMenuItem onClick={onClickCategory}>
          <MenuText>Shop by category</MenuText>
        </CategoryMenuItem>
        {categoryIsActive === true &&
          <CategoryNav>
            {listOfCategories.map((category) => {
              return (
                <div><Link to={`/categories/${category}`} key={category}>{category}</Link></div>
              )
            })}
          </CategoryNav>
      } 
      </MenuItemContainer>

      <MenuItemContainer>
        <CompanyMenuItem onClick={onClickCompany}>
          <MenuText>Shop by company</MenuText>
        </CompanyMenuItem>
        {companyIsActive === true &&
          <CompanyNav>
            {listOfCompanies.map((company) => {
              return (
                <div><Link to={`/companies/${company}`} key={company}>{company}</Link></div>
              )
            })}  
          </CompanyNav>
      }
      </MenuItemContainer>

    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
`;

const MenuItemContainer = styled.div` 
  display: flex;
  width: 300px;
  position: relative;
`;

const CategoryNav = styled.nav` 
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 1;
  padding-left: 5px;
`;

const CompanyNav = styled.nav` 
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 1;
  padding-left: 5px;
  max-height: 400px;
  overflow-y: auto;
`;

const MenuItem = styled.button` 
  width: 150px;
`;

const CategoryMenuItem = styled.button` 
  width: 150px;
`;

const CompanyMenuItem = styled.button` 
  width: 150px;
`;

const MenuText = styled.p` 
  font-size: 16px;
`;

export default Menu;
