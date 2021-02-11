import React from "react";
import Banner from "./Banner";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import getSelectedItems from "../reducers/cart-reducer";

const Cart = () => {

    const selectedItem = useSelector((state) => state.cart);

    console.log(getSelectedItems(selectedItem));

    // const selectedItem = useSelector(getSelectedItems);
    // console.log(cartState);

    return (
        <Wrapper>
            <Banner text={"Your Cart"} />
            <ContinueShopping to={`/products`}>Continue Shopping</ContinueShopping>
            <CartContainer>
                <CartItem  selectedItem={selectedItem} />
                <CartItem selectedItem={selectedItem} />
            </CartContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContinueShopping = styled(NavLink)`
    margin: 5px 0px 20px 0px;
    font-size: 24px;
    font-family: Montserrat;
    text-decoration: none;
`;

const CartContainer = styled.div` 
    display: flex;
    flex-direction: column;
    min-width: 800px;
    max-height: 500px;
    overflow-y: auto;
    background: #fff;
    box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
        3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
        3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
        3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
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

export default Cart;