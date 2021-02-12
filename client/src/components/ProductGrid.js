import React, { useState } from "react";
import styled from 'styled-components';
import ItemContainerSmall from "./ItemContainerSmall";

const ProductGrid = ({ products, handleTarget }) => {
    //console.log(products)
    const [ sortBy, setSortBy ] = useState()
    
    const productsArray = products.map((item) => {
        return {... item, price: parseFloat(item.price.replace("$", ""))}
    })
    //console.log(productsArray)

    const sortCopy = (arrOfObjects, key, order = 'asc') => {
        const arrCopy = [...arrOfObjects];
        if(order === 'asc'){
           arrCopy.sort((a, b) => a[key] - b[key])
       } else{
           arrCopy.sort((a, b) => b[key] - a[key])
        }
        return arrCopy
   };

    const ascendPrice = sortCopy(productsArray, 'price', 'asc');
    const descendPrice = sortCopy(productsArray, 'price', 'desc');
    //console.log({ascendPrice, descendPrice})

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }
    ///console.log(sortBy)

    if(!products) {
        return <div>Loading</div>
    }
     
    let showProducts;
    if(sortBy === "low") {
        showProducts = ascendPrice;
    } else if (sortBy === "high") {
        showProducts = descendPrice
    } else {
        showProducts = products;
    }

    return (
        <>
        <select onChange={(event) => handleSortBy(event)}>
            <option disabled>SORT BY</option>
            <option value="low">Price: low - high</option>
            <option value="high">Price: high - low</option>
        </select>
        <Wrapper>
            {showProducts && showProducts.map((elem, i)=>{
                console.log(elem)
                return (
                    <ItemContainerSmall 
                        key={elem._id}
                        item={{...elem, price: typeof elem.price === "number" ? "$" + (elem.price).toString(): elem.price}}
                        element_id={elem._id}
                        productName={elem.name}
                        imageSRC={elem.imageSrc}
                        stock={elem.numInStock}
                        category={elem.category}
                        companyId={elem.companyId}
                        price={elem.price}
                        location={elem.body_location}
                        handleTarget={handleTarget}
                    />
                )
            })}
        </Wrapper>
        </>
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