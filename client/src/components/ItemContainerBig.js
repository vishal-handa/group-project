import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions";
import { handleCheckInstock } from "./helpers/handle-check-instock-function";
import imageFile from "../images/out-of-stock.png";

import { IoShirtOutline, IoLocationSharp } from "react-icons/io5";

const ItemContainerBig = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState({});
  const cartItems = useSelector((state) => state.cart);
  console.log(selectedItem);
  //console.log(selectedItem._id);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedItem(data.data[0]);
      });
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  // code below conditionally renders price, messaging ("add to cart" vs. "out of stock"),
  // and opacity based on whether item is available or not

  return (
    <Wrapper>
      <BigItemView>
        <ImageWrapper>
          {handleCheckInstock(cartItems, selectedItem) > 0 ? (
            <Image src={selectedItem.imageSrc} />
          ) : (
            <OutOfStock src={imageFile} alt={"out of stock"} />
          )}
        </ImageWrapper>
        <ProductDetails>
          <div>
            <Title>{selectedItem.name}</Title>
            <ProductRef>REF. {selectedItem._id}</ProductRef>
          </div>
          <div>
            {handleCheckInstock(cartItems, selectedItem) > 0 ? (
              <Price>
                {selectedItem.price.includes(".")
                  ? selectedItem.price
                  : selectedItem.price + ".00"}
              </Price>
            ) : (
              <Padding />
            )}
            {handleCheckInstock(cartItems, selectedItem) > 0 ? (
              <Button
                onClick={() => {
                  handleAddToCart(selectedItem);
                }}
                disabled={handleCheckInstock(cartItems, selectedItem) < 0}
              >
                Add to Cart
              </Button>
            ) : (
              <OutOfStockTextContainer>
                <OutOfStockText>Out of Stock</OutOfStockText>
              </OutOfStockTextContainer>
            )}
            <ItemOptions>
              <Options>
                <IoShirtOutline size={16} />
                <p>Product Details</p>
              </Options>
              <Options>
                <IoLocationSharp size={16} />
                <p>Store availability</p>
              </Options>
            </ItemOptions>
          </div>
        </ProductDetails>
      </BigItemView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 58px 50px 50px 50px;
`;

const BigItemView = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  text-align: center;
  width: 75%;
  height: 450px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductDetails = styled.div`
  border-left: 2px solid lightgray;
  padding-left: 40px;
  width: 45%;
  height: 90%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  //overflow: hidden;
  /* border-bottom: 1px solid gray; */
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  //display: block;
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
  background: rgba(255, 255, 255, 1);
`;

const Title = styled.p`
  margin: 0;
  font-size: 22px;
  min-height: 60px;
`;

const ProductRef = styled.p`
  font-size: 15px;
  color: gray;
`;

const Price = styled.p`
  /* margin: 5px 5px 20px 5px; */
  float: right;
  font-size: 22px;
  margin-right: 0;
  margin-bottom: 20px;
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
  margin-bottom: none;
`;

const OutOfStockTextContainer = styled.div`
  display: block;
  width: 100%;
  background: black;
  border: none;
  margin-bottom: 8px;
  border-radius: 3px;
`;

const OutOfStockText = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 8px;
  margin: 0;
`;

const ItemOptions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 15px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 10px;
  }
`;

export default ItemContainerBig;
