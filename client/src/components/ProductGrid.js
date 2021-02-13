import React from "react";
import styled from "styled-components";
import ItemContainerSmall from "./ItemContainerSmall";
import { useSelector } from "react-redux";

const ProductGrid = ({ showGridProducts, setSortBy }) => {
  //console.log(products)
  const cartItems = useSelector((state) => state.cart);

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  ///console.log(sortBy)

  if (!showGridProducts) {
    return <div>Loading</div>;
  }

  // Check to see if item is in cart, if yes return available stock (excluding numInCart), if not return original numInStock
  let stockNum;
  const handleCheckInstock = (elem) => {
    if (cartItems[elem._id]) {
      stockNum = elem.numInStock - cartItems[elem._id].numInCart;
    } else {
      stockNum = elem.numInStock;
    }
    return stockNum;
  };

  return (
    <>
      <select defaultValue="SORT BY" onChange={(event) => handleSortBy(event)}>
        <option disabled>SORT BY</option>
        <option value="low">Price: low - high</option>
        <option value="high">Price: high - low</option>
      </select>
      <Wrapper>
        {showGridProducts?.map((elem) => (
          <ItemContainerSmall
            key={elem._id}
            item={{
              ...elem,
              price:
                typeof elem.price === "number"
                  ? "$" + elem.price.toString()
                  : elem.price,
            }}
            element_id={elem._id}
            productName={elem.name}
            imageSRC={elem.imageSrc}
            handleCheckInstock={handleCheckInstock}
            category={elem.category}
            companyId={elem.companyId}
            price={elem.price}
            location={elem.body_location}
          />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
`;

export default ProductGrid;
