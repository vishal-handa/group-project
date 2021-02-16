import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchBar = ({ setStatus }) => {
  const searchProductsArray = useSelector((state) => state.items.items);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  //console.log(searchProductsArray);

  // Once product is clicked from search, the menu is set to close and page is pushed to the big version of the product
  const handleSearchTermClicked = (product) => {
    //console.log(product);
    setStatus("close");
    history.push(`/products/${product._id}`);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search our products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchList>
        {searchProductsArray
          ?.filter((product) => {
            if (searchTerm === "") {
              return null;
            } else if (
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => {
            return (
              <button onClick={() => handleSearchTermClicked(product)}>
                {product.name}
              </button>
            );
          })}
      </SearchList>
    </div>
  );
};

const Input = styled.input`
  width: 300px;
  padding: 10px;
`;

const SearchList = styled.div`
  width: 300px;
  max-height: 150px;
`;

export default SearchBar;
