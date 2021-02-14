import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeOutUp, slideInLeft, slideInRight } from 'react-animations';
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
        onClick={() => {
          setStatus(status === 'open' ? 'close' : 'open');
          setCategoryIsActive(false);
          setCompanyIsActive(false);
        }}
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
        
      
      <MainMenu 
                className={status==='open' ? 'openMenu' : 'closeMenu'}
      >
      <MenuItemContainer style={{alignItems: (companyIsActive===true || categoryIsActive===true) ? 'flex-start' : 'center'}
                                // {animation: (companyIsActive===true || categoryIsActive===true) ? `0.4s ${slideInRight}` : null}
      }>
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
  position: fixed;
  top:0;
  background-color:white;
`;

const MenuButton = styled.button`
  background:none;
  border:none;
  outline:none;
  &:hover{
    cursor: pointer;
  }
`;
const slideDown=keyframes`
  ${fadeInDown};
`;

const slideUp=keyframes`
  ${fadeOutUp};
`;

const slideLeft=keyframes`
  ${slideInLeft};
`;

const slideRight=keyframes`
  ${slideInRight}
`;

const MenuItemContainer = styled.div` 
  display: flex;
  flex-direction:column;
  margin-bottom:20px;
  z-index:9;
  opacity:1;
`;


const MainMenu=styled.div`
  &.openMenu{
    display:block;
    position:fixed;
    top:60px;
    bottom:0px;
    height:100vh;
    width:100%;
    background-color:white;
    z-index:10;
    animation: 0.4s ${slideDown};
    overflow-y: hidden;
  }

  &.closeMenu{
    animation: 0.4s ${slideUp};
    display:none;
  }
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