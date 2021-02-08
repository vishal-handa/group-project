import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import ItemContainerBig from "./ItemContainerBig";

const ItemContainerSmall = ({
    productName,
    imageSRC,
    stock,
    category,
    companyId,
    price,
    location,
    element_id,
}) => {

    // let history = useHistory();

    const onClick = () => {
        console.log(element_id);
        // finish onClick function
    }

    return (
        <SmallItemView onClick={onClick}>
            <ImageWrapper>
                <Image src={imageSRC}/>
            </ImageWrapper>
            {element_id}
            <Title>{productName}</Title>
            <Button>Add to Cart</Button>
        </SmallItemView>
    )
};

const SmallItemView = styled.div`
    padding: 16px;
    background: #fff;
    box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
        3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
        3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
        3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
    text-align: center;
    width: 225px;
    height: 320px;
    margin-bottom:20px;
`;

const ImageWrapper = styled.div`
    overflow: hidden;
    border-bottom: 1px solid gray;
    display:flex;
    justify-content:center;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: 180px;
    margin:0;
    padding:8px;
`;

const Title = styled.p`
    margin: 0;
    margin-bottom: 14px;
    margin-top: 8px;
    font-size: 12px;
    min-height:60px;
    font-family:Montserrat;
`;

const Button=styled.button`
    display: block;
    width: 100%;
    background: black;
    color: white;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

export default ItemContainerSmall;
