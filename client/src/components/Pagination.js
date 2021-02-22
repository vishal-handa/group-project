import React from "react";
import styled from "styled-components";

const Pagination = ({ productsPerPage, totalProducts, handlePageClicked }) => {
  //console.log(totalProducts)
  //console.log(productsPerPage)

  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNum.push(i);
  }
  //console.log(pageNum)

  return (
    <PageBox>
      {pageNum.map((page) => {
        return (
          <PageNumber key={page}>
            <a onClick={() => handlePageClicked(page)}>{page}</a>
          </PageNumber>
        );
      })}
    </PageBox>
  );
};

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
`;

const PageNumber = styled.li`
  list-style-type: none;
  & > a {
    background-color: inherit;
    color: black;
    padding: 7px 13px 7px 13px;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
    &.active {
      border-bottom: 3px solid gray;
    }
  }
`;

export default Pagination;
