import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { handleFetchProducts } from "./helpers/fetch-request-helper";
import { clearCart } from "../actions";
import Banner from "./Banner";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  // selectedItem represents items that have been added to cart
  const selectedItem = Object.values(useSelector((state) => state.cart));
  console.log(selectedItem);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
  });

  // Initial cost is set to 0
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // Determine province for tax calculations
  const [province, setProvince] = useState("");

  // Ensures customer has entered text into name and email fields
  const firstNameHandler = (name) => {
    return ({ target: { value } }) => {
      setCustomerInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const lastNameHandler = (name) => {
    return ({ target: { value } }) => {
      setCustomerInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const emailHandler = (name) => {
    return ({ target: { value } }) => {
      setCustomerInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const creditCardHandler = (name) => {
    return ({ target: { value } }) => {
      setCustomerInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  // Scroll further down page upon checkout so customer sees name/email/credit card fields
  const handleCheckout = () => {
    setHasCheckedOut(true);
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // When order is completed, tell server the in cart item quantity at time of purchase so that
  // numInStock can be updated for next purchase
  const updateQuantity = (selectedItem) => {
    selectedItem.map((item) => {
      console.log(item);
      fetch(`/updateProduct/${item._id}`, {
        method: "POST",
        body: JSON.stringify({ item }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
    handleFetchProducts(dispatch);
    handleClearCart();
  };

  const handlePurchase = (selectedItem) => {
    updateQuantity(selectedItem);
  };

  // Get price of items * items' quantity in cart
  const handleSubTotal = (selectedItem) => {
    const itemPrice = selectedItem.map((item) => {
      return parseFloat(item.price.replace("$", "")) * item.numInCart;
    });
    console.log(itemPrice);
    const totalPrice = itemPrice.reduce((a, b) => a + b, 0);
    setSubTotal(totalPrice.toFixed(2));
  };

  useEffect(() => handleSubTotal(selectedItem), [selectedItem]);

  // Calculate tax based on customer province
  // If no province is selected, tax remains at $0.00
  const calculateTax = (province) => {
    if (
      province === "AB" ||
      province === "NT" ||
      province === "NU" ||
      province === "YT"
    ) {
      setTax(subTotal * 0.05);
    } else if (
      province === "NB" ||
      province === "NL" ||
      province === "NS" ||
      province === "PE"
    ) {
      setTax(subTotal * 0.15);
    } else if (province === "BC" || province === "MB") {
      setTax(subTotal * 0.12);
    } else if (province === "ON") {
      setTax(subTotal * 0.13);
    } else if (province === "QC") {
      setTax(subTotal * 0.14975);
    } else if (province === "SK") {
      setTax(subTotal * 0.11);
    } else {
      setTax(0);
    }
  };

  // Update tax calculation if the province changes
  useEffect(() => calculateTax(province), [province, subTotal]);

  // Ensure tax and subtotal are numbers and not strings
  let subTotalNum = Number(subTotal);
  let taxNum = Number(tax);

  // Calculate total price including tax
  useEffect(() => setTotal((subTotalNum + taxNum).toFixed(2), [province]));

  return (
    <Wrapper>
      <Banner text={"Your Cart"} />
      <ContinueShopping to={`/products`}>Continue Shopping</ContinueShopping>
      {selectedItem.length > 0 ? (
        <CartContainer>
          {selectedItem &&
            selectedItem.map((elem) => {
              console.log(elem);
              return (
                <CartItem
                  item={elem}
                  key={elem._id}
                  setHasCheckedOut={setHasCheckedOut}
                />
              );
            })}
          <TotalPrice>
            <p>
              <span>Subtotal (CAD): </span>
              <span>${subTotal}</span>
            </p>
            <label>Shipping destination: </label>
            <select
              defaultValue="Select your location"
              onChange={(event) => setProvince(event.target.value)}
            >
              <option disabled>Select your location</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NT">Northwest Territories</option>
              <option value="NS">Nova Scotia</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
            <p>
              <span>Total (CAD) </span>
              Taxes included:
              <span> ${total}</span>
            </p>
          </TotalPrice>
        </CartContainer>
      ) : (
        <p>Your cart is empty</p>
      )}

      {province === "" ? (
        <CheckoutButton
          onClick={() => handleCheckout()}
          disabled={selectedItem.length < 1 || province === ""}
        >
          Checkout
        </CheckoutButton>
      ) : (
        <CheckoutButton
          onClick={() => handleCheckout()}
          disabled={selectedItem.length < 1 || province === ""}
        >
          Checkout
        </CheckoutButton>
      )}

      {hasCheckedOut ? (
        <CheckoutDiv>
          <Input>
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              required
              value={customerInfo.firstName}
              onChange={firstNameHandler("firstName")}
              style={{ height: "25px", width: "200px" }}
            />
          </Input>
          <Input>
            <input
              name="surname"
              placeholder="Last Name"
              type="text"
              required
              value={customerInfo.lastName}
              onChange={lastNameHandler("lastName")}
              style={{ height: "25px", width: "200px" }}
            />
          </Input>
          <Input>
            <input
              name="email"
              placeholder="Email"
              type="text"
              required
              value={customerInfo.email}
              onChange={emailHandler("email")}
              style={{ height: "25px", width: "200px" }}
            />
          </Input>
          <Input>
            <input
              name="cardNumber"
              placeholder="Credit card number"
              type="email"
              reqired
              value={customerInfo.cardNumber}
              onChange={creditCardHandler("cardNumber")}
              style={{ height: "25px", width: "200px" }}
            />
          </Input>
          {customerInfo.firstName.length > 0 &&
          (customerInfo.lastName.length > 0) &
            (customerInfo.email.length > 0 &&
              customerInfo.email.includes("@")) &
            (customerInfo.cardNumber.length > 0) ? (
            <Link to="/confirmation">
              <SubmitButton onClick={() => handlePurchase(selectedItem)}>
                Complete Your Purchase
              </SubmitButton>
            </Link>
          ) : (
            <CompleteForm>
              <CompleteFormText>Please complete the form</CompleteFormText>
            </CompleteForm>
          )}
        </CheckoutDiv>
      ) : (
        <div />
      )}
    </Wrapper>
  );
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
  text-decoration: none;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 900px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

const TotalPrice = styled.div`
  border-top: 2px solid black;
  padding: 15px;
  margin: 15px;
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
`;

const ItemQuantity = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

const ItemPrice = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

const CheckoutButton = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px;
  margin: 50px;
  font-size: 24px;
  font-weight: 600;
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
  border-radius: 3px;
  padding: 5px;
  margin: 20px 0px 50px 0px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  &:link,
  &:focus,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

const CompleteForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  background: black;
  border: none;
  border-radius: 3px;
  margin: 20px 0px 50px 0px;
  font-size: 24px;
  font-weight: 600;
`;

const CompleteFormText = styled.p`
  color: white;
  padding: 5px;
`;

export default Cart;
