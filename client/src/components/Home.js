import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import banner from '../images/banner.png';
import belkin from './logos/belkin.png';
import casio from './logos/casio.png';
import lg from './logos/lg.jpg';
import motorola from './logos/motorola.png';
import nike from './logos/nike.jpg';
import samsung from './logos/samsung.png';

const Home=()=>{
    const theCategories = useSelector(state=>state.items.items);
    const randomArray = Array(10).fill().map(() => Math.floor(Math.random() * 348) + 1);
    return (
        <Wrapper>
            <Banner>
                <Image src={banner}/>
            </Banner>
            <Label>Popular Brands</Label>
            <LogoContainer>
                <Link to={'/companies/Belkin'}>
                    <Logo src={belkin}/>
                </Link>
                <Link to={'/companies/Casio'}>
                    <Logo src={casio}/>
                </Link>
                <Link to={'/companies/Lg'}>
                    <Logo src={lg}/>
                </Link>
                <Link to={'/companies/Motorola'}>
                    <Logo src={motorola}/>
                </Link>
                <Link to={'/companies/Nike'}>
                    <Logo src={nike}/>
                </Link>
                <Link to={'/companies/Samsung'}>
                    <Logo src={samsung}/>
                </Link>
            </LogoContainer>
            <Label>Most popular articles</Label>
            {(theCategories && randomArray) &&
                <ProductsList>
                    {randomArray.map((elem)=>{
                        return (
                            <StyledLink key={elem} to={`/products/${theCategories[elem]._id}`}>
                                <Img src={theCategories[elem].imageSrc}/>
                            </StyledLink>
                        )
                    })}
                </ProductsList>}
        </Wrapper>
    )
}

const Wrapper=styled.div`
    width:100%;
`;

const Banner=styled.div`
    width:inherit;
    top:55px;
`;

const Image=styled.img`
    width:inherit;
    height:600px;
    object-fit:cover;
`;

const Label=styled.p`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    color:white;
    font-size:5em;
    margin-block-start: 0;
    margin-block-end: 0;
    text-shadow: 0px 1px 9px #24100A;
`;

const LogoContainer=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    margin: 10px 17% 30px 17%;
`;

const Logo=styled.img`
    height:150px;
    width:250px;
    padding:5px;
`;

const ProductsList=styled.section`
    display:flex;
    flex-flow: row nowrap;
    scroll-snap-type: x mandatory;
    scroll-snap-type: y none;
    overflow-x:scroll;
    &::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        height: 7px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
    }
`;

const StyledLink=styled(Link)`
    margin: 10px;
    height:200px;
    width:200px;
    border-radius:50%;
`;

const Img=styled.img`
    width:inherit;
    height:inherit;
    border-radius:50%;
    transition: scale 0.6 linear;
    &:hover{
        transform:scale(1.1);
    }
`;


export default Home;
