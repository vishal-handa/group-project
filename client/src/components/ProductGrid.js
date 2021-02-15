import React from "react";
import styled from "styled-components";
import ItemContainerSmall from "./ItemContainerSmall";

const ProductGrid = ({ showGridProducts, setSortBy }) => {
  //console.log(products)

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  ///console.log(sortBy)

  if (!showGridProducts) {
    return <div>Loading</div>;
  }

  return (
    <Grid>
      <SortSelect
        defaultValue="SORT BY"
        onChange={(event) => handleSortBy(event)}
      >
        <option disabled>SORT BY</option>
        <option value="low">PRICE: LOW - HIGH</option>
        <option value="high">PRICE: HIGH - LOW</option>
      </SortSelect>
      <Wrapper>
        {showGridProducts?.map((elem) => (
          <ItemContainerSmall
            key={elem._id}
            // price from ascending and descending array had been changed to a number for sorting,
            // need to change back to its original form: string with $
            // want 2 decimal places for the price and if the price is a full number, add .00
            item={{
              ...elem,
              price:
                typeof elem.price === "number"
                  ? "$" + elem.price.toFixed(2).toString()
                  : elem.price.includes(".")
                  ? elem.price
                  : elem.price + ".00",
            }}
            element_id={elem._id}
            productName={elem.name}
            imageSRC={elem.imageSrc}
            // category={elem.category}
            // companyId={elem.companyId}
            // price={elem.price}
            // location={elem.body_location}
          />
        ))}
      </Wrapper>
    </Grid>
  );
};

const Grid = styled.div`
  display: block;
  margin: 0 65px;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
`;

const SortSelect = styled.select`
  float: right;
  margin-right: 15px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
`;

export default ProductGrid;
