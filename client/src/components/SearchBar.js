import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const searchProductsArray = useSelector((state) => state.items.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("close");
  const history = useHistory();
  //console.log(searchProductsArray);

  // Once product is clicked from search, the menu is set to close and page is pushed to the big version of the product
  const handleSearchTermClicked = (product) => {
    //console.log(product);
    history.push(`/products/${product._id}`);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search our products"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setStatus("open");
        }}
      />
      {status === "open" && (
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
            .slice(0, 9)
            .map((product) => {
              return (
                <Button
                  onClick={() => {
                    handleSearchTermClicked(product);
                    setStatus("close");
                    setSearchTerm("");
                  }}
                >
                  {product.name}
                </Button>
              );
            })}
        </SearchList>
      )}
    </div>
  );
};

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 15px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
`;

const SearchList = styled.div`
  width: 300px;
  max-height: 150px;
`;

const Button = styled.button`
  background: white;
  outline: none;
  border: none;
  padding: 5px;
  text-align: left;
  transition: 0.3s;
  width: 290px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    background: gray;
    color: white;
  }
`;

export default SearchBar;
