import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import BurgerMenu from "./TheBurger/BurgerMenu";

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
  const [status, setStatus] = useState('close');

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
      <MenuButton
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <BurgerMenu status={status}/>
      </MenuButton>
      <div>
      <Link to="/cart">
          <MenuItem onClick={()=>setStatus('close')}>
            <MenuText>🛒</MenuText>
          </MenuItem>
        </Link>
      </div>
        
      
      <MainMenu style={{display: status==='open' ? 'block' : 'none'}
      }>
      <MenuItemContainer style={{alignItems: (companyIsActive===true || categoryIsActive===true) ? 'flex-start' : 'center'}}>
        <Link exact to="/">
          <MenuItem onClick={()=>setStatus('close')}>
            <MenuText>Home</MenuText>
          </MenuItem>
        </Link>
      
        <Link to="/products">
          <MenuItem onClick={()=>setStatus('close')}>
            <MenuText>Shop all products</MenuText>
          </MenuItem>
        </Link>
      
        <CategoryMenuItem onClick={() => onClickCategory()}>
          <MenuText>Shop by category</MenuText>
        </CategoryMenuItem>
        {categoryIsActive === true &&
          <CategoryNav>
            {listOfCategories.map((category) => {
              return (
                <div>
                  <StyledLink to={`/categories/${category}`} 
                                key={category} 
                                onClick={()=>{
                                  setStatus('close');
                                  setCategoryIsActive(false);
                                  setCompanyIsActive(false);
                                }}
                  >
                    {category}
                      </StyledLink>
                </div>
              )
            })}
          </CategoryNav>
        } 
      
        <CompanyMenuItem onClick={onClickCompany}>
          <MenuText>Shop by company</MenuText>
        </CompanyMenuItem>
        {companyIsActive === true &&
          <CompanyNav>
            {listOfCompanies.map((company) => {
              return (
                <div>
                  <StyledLink to={`/companies/${company}`} 
                              key={company} 
                              onClick={()=>{
                                setStatus('close');
                                setCategoryIsActive(false);
                                setCompanyIsActive(false);
                              }}
                  >
                    {company}
                  </StyledLink>
                </div>
              )
            })}  
          </CompanyNav>
        }
      </MenuItemContainer>
      </MainMenu>
    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const MenuItemContainer = styled.div` 
  display: flex;
  flex-direction:column;
  transition:all ease 0.3s;
  margin-bottom:20px;
`;

const MenuButton = styled.button`
  background:none;
  border:none;
  outline:none;
  &:hover{
    cursor: pointer;
  }
`;

const MainMenu=styled.div`
  position:absolute;
  top:60px;
  height:calc(100vh - 60px);
  width:100%;
  background-color:white;
  z-index:1;
  transition:all ease 0.3s;
`;

const CategoryNav = styled.nav` 
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 10%;
  right:10px;
  width:80%;
  opacity: 1;
  padding-left: 5px;
  max-height: 400px;
  overflow-y: auto;
  display:flex;
  transition:all ease 0.3s;
`;
const CompanyNav = styled.nav` 
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 0px;
  right:10px;
  width:80%;
  height:100%;
  opacity: 1;
  padding-left: 5px;
  max-height: 400px;
  overflow-y: auto;
  display:flex;
  flex-wrap:wrap;
  transition:all ease 0.3s;
`;



const MenuItem = styled.button` 
  width: 150px;
  background-color:white;
  border:none;
  outline:none;
`;

const CategoryMenuItem = styled.button` 
  background-color:white;
  border:none;
  outline:none;
  width: 150px;
`;

const CompanyMenuItem = styled.button` 
  background-color:white;
  border:none;
  outline:none;
  width: 150px;
`;

const MenuText = styled.p` 
  font-size: 16px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 20px;

    /* &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    } */
`;

export default Menu;

{/* <MenuItemContainer>
        <Link to="/">
          <MenuItem>
            <MenuText>Home</MenuText>
          </MenuItem>
        </Link>
      </MenuItemContainer>
      <MenuItemContainer>
        <Link to="/products">
          <MenuItem>
            <MenuText>Shop all products</MenuText>
          </MenuItem>
        </Link>
      </MenuItemContainer>
      <MenuItemContainer>
        <CategoryMenuItem onClick={() => onClickCategory()}>
          <MenuText>Shop by category</MenuText>
        </CategoryMenuItem>
        {categoryIsActive === true &&
          <CategoryNav>
            {listOfCategories.map((category) => {
              return (
                <div><StyledLink to={`/categories/${category}`} key={category}>{category}</StyledLink></div>
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
                <div><StyledLink to={`/companies/${company}`} key={company}>{company}</StyledLink></div>
              )
            })}  
          </CompanyNav>
      }
      </MenuItemContainer>
      <MenuItemContainer>
        <Link to="/cart">
          <MenuItem>
            <MenuText>🛒</MenuText>
          </MenuItem>
        </Link>
      </MenuItemContainer> */}