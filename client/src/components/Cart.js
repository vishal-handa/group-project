import React, { useState } from "react";
import Banner from "./Banner";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
// import getSelectedItems from "../reducers/cart-reducer";

const Cart = () => {

    const [hasCheckedOut, setHasCheckedOut] = useState(false);

    const selectedItem=Object.values(useSelector(state=>state.cart));
    console.log(selectedItem);

    const handleCheckout = () => {
        setHasCheckedOut(true);
    }

    console.log(hasCheckedOut);

    const handlePurchase = (event) => {
        alert("Your purchase was successful!")
    }

    return (
        <Wrapper>
            <Banner text={"Your Cart"} />
            <ContinueShopping to={`/products`}>Continue Shopping</ContinueShopping>
            <CartContainer>
                {selectedItem && selectedItem.map(elem=>{
                    return <CartItem item={elem} key={elem._id}/>
                })}
            </CartContainer>
            <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>

            {hasCheckedOut ?
                <CheckoutDiv>
                    <Input>
                        <input
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    <Input>
                        <input
                        name="surname"
                        placeholder="Last Name"
                        type="text"
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    <Input>
                        <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    <SubmitButton
                    onClick={handlePurchase}
                    >Complete Your Purchase 
                    </SubmitButton>
                </CheckoutDiv>
                :
                <div />
            }
        </Wrapper>
    )
};

const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContinueShopping = styled(NavLink)`
    margin: 5px 0px 30px 0px;
    font-size: 24px;
    font-family: Montserrat;
    text-decoration: none;
    color: black;
    cursor: pointer;
`;

const CartContainer = styled.div` 
    display: flex;
    flex-direction: column;
    min-width: 900px;
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

const CheckoutButton = styled.button` 
    display: block;
    width: 200px;
    height: 50px;
    background: black;
    color: white;
    border: none;
    padding: 5px;
    margin: 50px;
    font-size: 24px;
    font-weight: 600;
    font-family: Montserrat;
    cursor: pointer;
`;

const CheckoutDiv = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    width: 800px;
    margin-bottom: 100px;
`;

const Input = styled.div` 
    padding: 10px;
`;

const SubmitButton = styled.button` 
    display: block;
    width: 400px;
    height: 40px;
    background: black;
    color: white;
    border: none;
    padding: 5px;
    margin: 20px 0px 50px 0px;
    font-size: 24px;
    font-weight: 600;
    font-family: Montserrat;
    cursor: pointer;
`;

export default Cart;