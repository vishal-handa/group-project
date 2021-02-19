import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ConfirmationPage = () => {
  const [confirmationNumber, setConfirmationNumber] = useState();

  // Generate a random number that can be used for a confirmation number
  let randomNumber;
  const generateRandomNumber = () => {
    let maxNumber = 500000;
    randomNumber = Math.floor(Math.random() * maxNumber + 1);
  };

  // Call the generateRandomNumber function once page is loaded
  // Assign the random number as the customer's confirmation number
  useEffect(() => {
    generateRandomNumber();
    setConfirmationNumber(randomNumber);
  }, []);

  return (
    <Wrapper>
      <ContainerDiv>
        <TextContainer>
          <Header>Thanks for your purchase!</Header>
          <OrderNumber>Your order # is {confirmationNumber}</OrderNumber>
        </TextContainer>
      </ContainerDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
`;

const ContainerDiv = styled.div` 
  padding-top: 57px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 600px;
  margin-top: 50px;
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
