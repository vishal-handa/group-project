import React, { useState } from "react";
import styled from "styled-components";
// import companies from "../../../server/data/companies.json";

const Menu = ({homePageState}) => {

  // assemble array of categories
  let listOfCategories = homePageState.categories.categories;

  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [companyIsActive, setCompanyIsActive] = useState(false);

  const [displayCompanies, setDisplayCompanies] = useState([]);

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
        <MenuItem>
          <MenuText>Shop all products</MenuText>
        </MenuItem>
      </MenuItemContainer>

      <MenuItemContainer>
        <CategoryMenuItem onClick={onClickCategory}>
          <MenuText>Shop by category</MenuText>
        </CategoryMenuItem>
        {categoryIsActive === true &&
          <CategoryNav>
            {listOfCategories.map((category) => {
                return (
                    <p>{category}</p>
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
            <ul>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Continue mapping over company items</p>
            </ul>
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
`;

const CompanyNav = styled.nav` 
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 1;
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
