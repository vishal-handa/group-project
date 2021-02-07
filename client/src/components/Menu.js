import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <MenuItem>
        Shop by product
      </MenuItem>

      <MenuItem>
        Shop by category
      </MenuItem>

      <MenuItem>
        Shop by company
      </MenuItem>
      
    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const MenuItem = styled.p` 
  font-size: 18px;

`;

export default Menu;