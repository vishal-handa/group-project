import React from "react";
import styled from "styled-components";

const Banner = ({text}) => {

    return (
        <BannerBox><h1>{text}</h1></BannerBox>
    )
};

const BannerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    width: 700px;
    height: 225px;
    border-radius: 5px;
    background-color: lightslategray;

    & h1 {
        font-size: 95px; 
    }
`;

export default Banner;