import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { addToCart } from "../actions";
import { useDispatch } from 'react-redux';
import imageFile from '../images/out-of-stock.png';

const ItemContainerSmall = ({
    item,
    productName,
    imageSRC,
    category,
    companyId,
    price,
    location,
    element_id,
    handleCheckInstock,
}) => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));   
    }

    // code below conditionally renders price, messaging ("add to cart" vs. "out of stock"), 
    // and opacity based on whether item is available or not

    return (
        <SmallItemView>
            <StyledLink to={ `/products/${element_id}`}
                        className={(handleCheckInstock(item) <=0) ? 'disabled-link' : null}
            >
                <OnClickWrapper className={(handleCheckInstock(item) <=0) ? 'disabled-link' : null}>
                    <ImageWrapper >
                        {handleCheckInstock(item) > 0 ? <Image src={imageSRC}/> : <OutOfStock src={imageFile} alt={'out of stock'}/> }
                    </ImageWrapper>
                    <Title>{productName}</Title>
                </OnClickWrapper>
            </StyledLink>
            {handleCheckInstock(item) > 0 ? <Price>{price}</Price> : <Padding />}
            {handleCheckInstock(item) > 0 ?     
            <Button onClick={() => {handleAddToCart(item)}} 
                disabled={handleCheckInstock(item) < 0}>
                    Add to Cart
            </Button>
            : 
            <OutOfStockTextContainer>
                <OutOfStockText>Out of Stock</OutOfStockText>
            </OutOfStockTextContainer>
            }
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
`;

const StyledLink=styled(Link)`
    text-decoration:none;
    color:black;
    &.disabled-link{
        pointer-events:none;
    }
`;

const OnClickWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    height: 260px;
`;

const ImageWrapper = styled.div`
    overflow: hidden;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content:center;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: 180px;
    margin: 0;
    padding:8px;
`;

const Price = styled.p`
    font-size: 16px;
    font-family: Montserrat;
    margin: 0px 0px 10px 0px;
    padding: 0;
    height: 15px;
`;

const Padding = styled.div`
    height: 25px;
`;

const OutOfStock = styled.img` 
    display: block;
    max-width: 100%;
    height: 180px;
    margin:0;
    padding:8px;
    background:rgba(255,255,255,1);
`;

const Title = styled.p`
    margin: 0;
    margin-top: 8px;
    font-size: 12px;
    min-height: 40px;
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
    font-family: Montserrat;
    cursor: pointer;
`;

const OutOfStockTextContainer = styled.div`
    display: block;
    width: 100%;
    background: black;
    border: none;
    margin-bottom: 8px;
`;

const OutOfStockText = styled.p` 
    font-size: 16px;
    font-weight: 600;
    font-family: Montserrat;
    color: white;
    padding: 8px;
    margin: 0;
`;

export default ItemContainerSmall;
