import React from "react";
import styled from "styled-components";

const Pagination = ({ productsPerPage, totalProducts, handlePageClicked }) => {
    //console.log(totalProducts)
    //console.log(productsPerPage)

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNum.push(i);
    };
    //console.log(pageNum)

    return (
      <PageBox>
        {pageNum.map((page) => {
            return (
                <li key={page}>
                    <a onClick={() => handlePageClicked(page)} >{page}</a>
                    {/* could add href to access pages eventually */}
                </li>
            )
        })}
      </PageBox>
    )
};

const PageBox = styled.div`
    display: flex;
    border: 1px solid gray;
    & li {
        list-style-type: none;
        padding: 10px;
        border-right: 1px solid gray;
    }
`;

export default Pagination;
