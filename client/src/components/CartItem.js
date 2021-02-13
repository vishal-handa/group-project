import React from "react";
import styled from "styled-components";
import { removeFromCart } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({item, setHasCheckedOut}) => {
    const dispatch = useDispatch();
    console.log(item);
    return (
        <Wrapper>
        {/* <ItemImage>Image</ItemImage> */}
            <ItemInfoContainer>
                <ItemImage src={item.imageSrc}/>
                <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>Quantity: {item.numInCart}</ItemQuantity>
                </div>
                <ItemPrice>{item.price}</ItemPrice>
            <RemoveItem onClick={() => {
                dispatch(removeFromCart(item));
                setHasCheckedOut(false);
                }}
            >
                Remove item
            </RemoveItem>
            </ItemInfoContainer>
        </Wrapper>
    )
}

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
    border: 1px solid blue;
`;

const ItemName = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
    width: 500px;
`;

// make this an input field so customers can increase quantity
const ItemQuantity = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
`;

const ItemPrice = styled.p` 
    margin: 5px 50px 0px 0px;
    font-size: 14px;
    font-family: Montserrat;
    width: 50px;
`;

const RemoveItem = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
    cursor: pointer;
`;

export default CartItem;
