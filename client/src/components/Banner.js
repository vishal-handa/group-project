import React from "react";
import styled from "styled-components";

const Banner = ({ text, bannerImage }) => {
  return (
    <BannerBox
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        border: "2px solid black",
        //opacity: "0.5",
      }}
    >
      <h1>{text}</h1>
    </BannerBox>
  );
};

const BannerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 5%;
  width: 90%;
  height: 300px;
  border-radius: 3px;
  //background-color: lightslategray;

  & h1 {
    font-size: 80px;
    text-align: center;
    color: white;
    //color: black;
    //text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`;

export default Banner;
