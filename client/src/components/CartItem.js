import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { removeFromCart, changeCartQuantity } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item, setHasCheckedOut }) => {
  const dispatch = useDispatch();
  const [quantityInCart, setQuantityInCart] = useState(item.numInCart);

  // Update numInCart in our state so that it can be deducted from stock when order is completed
  useEffect(() => {
    dispatch(changeCartQuantity(item, quantityInCart));
  }, [quantityInCart]);

  // increases number of cart items until cart quantity exceeds stock quantity
  const increaseQuantity = () => {
    if (quantityInCart < item.numInStock) {
      setQuantityInCart(quantityInCart + 1);
    }
  };

  // decreases number of items in cart
  const decreaseQuantity = () => {
    if (quantityInCart > 1) {
      setQuantityInCart(quantityInCart - 1);
    } else {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <Wrapper>
      <ItemInfoContainer>
        <ItemImage src={item.imageSrc} />
        <DescriptionQuantityContainer>
          <ItemName>{item.name}</ItemName>
          <QuantityContainer>
            <ItemQuantity>Quantity:</ItemQuantity>
            <QuantityButton onClick={() => decreaseQuantity()}>
              -
            </QuantityButton>
            <Quantity>{quantityInCart}</Quantity>
            <QuantityButton onClick={() => increaseQuantity()}>
              +
            </QuantityButton>
          </QuantityContainer>
        </DescriptionQuantityContainer>
        <ItemPrice>{item.price}</ItemPrice>
        <RemoveItem
          onClick={() => {
            dispatch(removeFromCart(item));
            setHasCheckedOut(false);
          }}
        >
          Remove item
        </RemoveItem>
      </ItemInfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
`;

const ItemImage = styled.img`
  display: block;
  width: 50px;
  height: auto;
  margin-right: 100px;
  padding: 8px;
`;

const DescriptionQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90%;
`;

const ItemName = styled.p`
  margin: 5px 0px;
  font-size: 14px;
  font-family: Montserrat;
  width: 500px;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// make this an input field so customers can increase quantity
const ItemQuantity = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

const Quantity = styled.p`
  margin: 5px 0px;
  padding: 0px 5px;
  font-size: 14px;
`;

const QuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border: none;
  background-color: #f3f3f3;
`;

const ItemPrice = styled.p`
  margin: 5px 50px 0px 0px;
  font-size: 14px;
  width: 50px;
`;

const RemoveItem = styled.p`
  margin: 5px 0px;
  cursor: pointer;
`;

export default CartItem;
