import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ItemContainerBig = () => {

    const { id } = useParams();

    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        fetch(`/products/${id}`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setSelectedItem(data.data[0]);
        })
    }, []);

    return (
      <Wrapper>
        <BigItemView>
            <ImageWrapper>
                <Image src={selectedItem.imageSrc}/>
            </ImageWrapper>
            <Title>{selectedItem.name}</Title>
            <Price>{selectedItem.price}</Price>
            <Button>Add to Cart</Button>
        </BigItemView>
      </Wrapper>
    )
}

const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

const BigItemView = styled.div` 
    padding: 16px;
    background: #fff;
    box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
        3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
        3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
        3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
    text-align: center;
    width: 500px;
    height: 500px;
    margin-bottom: 20px;
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
    height: 300px;
    margin:0;
    padding:8px;
`;

const Title = styled.p`
    margin: 0;
    margin-bottom: 14px;
    margin-top: 8px;
    font-size: 24px;
    min-height: 60px;
    font-family: Montserrat;
`;

const Price = styled.p` 
    margin: 5px 5px 20px 5px;
    font-size: 24px;
    font-family: Montserrat;
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

export default ItemContainerBig;
