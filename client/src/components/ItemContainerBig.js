import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions";

const ItemContainerBig = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState({});
  const cartItems = useSelector((state) => state.cart);
  //console.log(selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedItem(data.data[0]);
      });
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  // Same code as in itemSmall...
  let stockNum;
  const handleCheckInstock = (selectedItem) => {
    if (cartItems[id]) {
      stockNum = selectedItem.numInStock - cartItems[id].numInCart;
    } else {
      stockNum = selectedItem.numInStock;
    }
    return stockNum;
  };

  // code below conditionally renders price, messaging ("add to cart" vs. "out of stock"),
  // and opacity based on whether item is available or not
  console.log(typeof selectedItem.price);
  return (
    <Wrapper>
      <BigItemView>
        <ImageWrapper>
          {handleCheckInstock(selectedItem) > 0 ? (
            <Image src={selectedItem.imageSrc} />
          ) : (
            <OutOfStock src={selectedItem.imageSrc} />
          )}
        </ImageWrapper>
        <Title>{selectedItem.name}</Title>

        {handleCheckInstock(selectedItem) > 0 ? (
          <Price>
            {selectedItem.price.includes(".")
              ? selectedItem.price
              : selectedItem.price + ".00"}
          </Price>
        ) : (
          <Padding />
        )}

        {handleCheckInstock(selectedItem) > 0 ? (
          <Button
            onClick={() => {
              handleAddToCart(selectedItem);
            }}
            disabled={handleCheckInstock(selectedItem) < 0}
          >
            Add to Cart
          </Button>
        ) : (
          <OutOfStockTextContainer>
            <OutOfStockText>Out of Stock</OutOfStockText>
          </OutOfStockTextContainer>
        )}
      </BigItemView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const BigItemView = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  text-align: center;
  width: 500px;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 3px;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 300px;
  margin: 0;
  padding: 8px;
`;

const OutOfStock = styled.img`
  display: block;
  max-width: 100%;
  height: 300px;
  margin: 0;
  padding: 8px;
  opacity: 25%;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 14px;
  margin-top: 8px;
  font-size: 24px;
  min-height: 60px;
`;

const Price = styled.p`
  margin: 5px 5px 20px 5px;
  font-size: 24px;
`;

const Padding = styled.div`
  height: 25px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: gray;
  }
`;

const OutOfStockTextContainer = styled.div`
  display: block;
  width: 100%;
  background: black;
  border: none;
  margin-bottom: 8px;
`;

const OutOfStockText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 8px;
  margin: 0;
`;

export default ItemContainerBig;
