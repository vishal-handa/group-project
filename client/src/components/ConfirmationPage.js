import React from "react";
import styled from "styled-components";

const ConfirmationPage = () => {
  let randomNumber;

  const confirmationNumber = () => {
    let maxNumber = 500000;
    randomNumber = Math.floor(Math.random() * maxNumber + 1);
  };

  confirmationNumber();

  return (
    <Wrapper>
      <TextContainer>
        <Header>Thanks for your purchase!</Header>
        <OrderNumber>Your order # is {randomNumber}</OrderNumber>
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 600px;
  margin-top: 100px;
  border: 2px solid black;
  border-radius: 3px;
`;

const Header = styled.p`
  font-size: 40px;
`;

const OrderNumber = styled.p`
  font-size: 28px;
`;

export default ConfirmationPage;
