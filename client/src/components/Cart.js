import React, { useState } from "react";
import Banner from "./Banner";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { receiveItems } from "../actions";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const [hasCheckedOut, setHasCheckedOut] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({firstName: "", lastName: "", email: ""});
    
    // ensures customer has entered text into name and email fields
    const firstNameHandler = (name) => {
        return ({target: {value}}) => {
            setCustomerInfo(oldValues => ({...oldValues, [name]: value}));
        }
    }

    const lastNameHandler = (name) => {
        return ({target: {value}}) => {
            setCustomerInfo(oldValues => ({...oldValues, [name]: value}));
        }
    }

    const emailHandler = (name) => {
        return ({target: {value}}) => {
            setCustomerInfo(oldValues => ({...oldValues, [name]: value}));
        }
    }

    const selectedItem=Object.values(useSelector(state=>state.cart));
    console.log(selectedItem);

    const handleCheckout = () => {
        setHasCheckedOut(true);
    }

    const updateQuantity = (selectedItem) => {
        selectedItem.map((item) => {
            fetch(`/updateProduct/${item._id}`, {
                method: "POST", 
                body: JSON.stringify({item}),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then(data => console.log(data))
        })
        fetch('/products')
        .then(res=>res.json())
        .then(res=>dispatch(receiveItems(res.data)))
    };


    const handlePurchase = (selectedItem) => {
        if (customerInfo.firstName.length > 0 && customerInfo.lastName.length > 0 & customerInfo.email.length > 0) {
            // console.log(`Thank you ${customerInfo.firstName}! Your purchase was successful!`)
        }
        updateQuantity(selectedItem);
    }

    return (
        <Wrapper>
            <Banner text={"Your Cart"} />
            <ContinueShopping to={`/products`}>Continue Shopping</ContinueShopping>
            {selectedItem.length > 0 ?
            <CartContainer>
                {selectedItem && selectedItem.map(elem=>{
                    return <CartItem item={elem} key={elem._id} setHasCheckedOut={setHasCheckedOut}/>
                })}
            </CartContainer>
            :
            <p>Your cart is empty</p>
            }
            <CheckoutButton onClick={() => handleCheckout()} disabled={selectedItem.length<1}>Checkout</CheckoutButton>

            {hasCheckedOut ?
                <CheckoutDiv>
                    <Input>
                        <input
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        value={customerInfo.firstName}
                        onChange={firstNameHandler("firstName")}
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    <Input>
                        <input
                        name="surname"
                        placeholder="Last Name"
                        type="text"
                        value={customerInfo.lastName}
                        onChange={lastNameHandler("lastName")}
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    <Input>
                        <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={customerInfo.email}
                        onChange={emailHandler("email")}
                        style={{height: "25px", width: "200px"}}
                    />
                    </Input>
                    {customerInfo.firstName.length > 0 && customerInfo.lastName.length > 0 & customerInfo.email.length > 0 ?
                    <Link to="/confirmation">
                        <SubmitButton onClick={()=>handlePurchase(selectedItem)}>Complete Your Purchase</SubmitButton> 
                    </Link>
                    :
                    <CompleteForm>Please complete the form</CompleteForm>
                    }
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
    margin: 5px 0px 40px 0px;
    padding: 15px;
    font-size: 30px;
    font-family: Montserrat;
    text-decoration: none;
    color: black;
    border: 2px solid black;
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
    height: 50px;
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

const CompleteForm = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    background: black;
    color: white;
    border: none;
    padding: 5px;
    margin: 20px 0px 50px 0px;
    font-size: 24px;
    font-weight: 600;
    font-family: Montserrat;
`;

export default Cart;
