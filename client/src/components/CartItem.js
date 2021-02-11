import React from "react";
import styled from "styled-components";
import { removeFromCart } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    console.log(item);
    return (
        <Wrapper>
        {/* <ItemImage>Image</ItemImage> */}
            <ItemInfoContainer>
                <ItemImage src={item.imageSrc}/>
                <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>{item.numInCart}</ItemQuantity>
                </div>
                <ItemPrice>{item.price}</ItemPrice>
            <RemoveItem onClick={() => dispatch(removeFromCart(item))}>Remove item</RemoveItem>
            </ItemInfoContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    display: flex;
`;

const ItemInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 100%;
`;

const ItemImage = styled.img` 
    display: block;
    width: 50px;
    height: auto;
    margin: 0;
    padding: 8px;
`;

const ItemName = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
    max-width:400px;
`;

// make this an input field so customers can increase quantity
const ItemQuantity = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
`;

const ItemPrice = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
`;

const RemoveItem = styled.p` 
    margin: 5px 0px;
    font-size: 14px;
    font-family: Montserrat;
`;

export default CartItem;
