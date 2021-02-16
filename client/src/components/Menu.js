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
      <MenuItemContainer style={{marginLeft: (companyIsActive===true || categoryIsActive===true) ? '5%' : '45%'}
      }
      >
        <Link to="/">
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


const MenuItemContainer = styled.div` 
  display: flex;
  flex-direction:column;
  margin-bottom:20px;
  z-index:9;
  opacity:1;
  transition: margin-left 0.4s linear;
`;


const MainMenu=styled.div`
  &.openMenu{
    display:block;
    position:fixed;
    top:53px;
    bottom:0px;
    height:100vh;
    width:100%;
    background-color:white;
    z-index:10;
    animation: 0.4s ${slideDown};
    overflow-y: hidden;
  }

  &.closeMenu{
    display:none;
    animation: 0.4s ${slideUp};
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
  animation: 0.6s ${slideDown};
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
  animation: 1s ${slideDown};
  &::-webkit-scrollbar-track
    {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

  &::-webkit-scrollbar
    {
      width: 7px;
      background-color: #F5F5F5;
    }

  &::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
`;



const MenuItem = styled.button` 
  width: 150px;
  background-color:white;
  border:none;
  outline:none;
  &:hover{
    cursor: pointer;
  }
`;

const CategoryMenuItem = styled.button` 
  background-color:white;
  border:none;
  outline:none;
  width: 150px;
  &:hover{
    cursor: pointer;
  }
`;

const CompanyMenuItem = styled.button` 
  background-color:white;
  border:none;
  outline:none;
  width: 150px;
  &:hover{
    cursor: pointer;
  }
`;

const MenuText = styled.p` 
  font-size: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 20px;
    color:black;
    font-size:18px;
`;

export default Menu;