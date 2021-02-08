import React from "react";
import styled from 'styled-components';
import ItemContainerSmall from "./ItemContainerSmall";

const ProductGrid = ({ products }) => {
    // console.log(products);
    return (
        <Wrapper>
            {products && products.map((elem, i)=>{
                return (
                    <ItemContainerSmall 
                        key={elem._id}
                        productName={elem.name}
                        imageSRC={elem.imageSrc}
                        stock={elem.numInStock}
                        category={elem.category}
                        companyId={elem.companyId}
                        price={elem.price}
                        location={elem.body_location}
                    />
                )
            })}
        </Wrapper>
    )
};

const Wrapper=styled.div`
    height:auto;
    width:100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
    grid-gap: 24px;
    align-items: center;
    justify-items: center; 
`;

export default ProductGrid;
