import React, { useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import entertainment from '../images/entertainment.jpg';
import fitness from '../images/fitness.jpg';
import lifestyle from '../images/lifestyle.jpg';
import medical from '../images/medical.png'

const Home=()=>{
    const theCategories = useSelector(state=>state.items.items);
    // const FadeImages=[
    //     "../images/entertainment.jpg",
    //     "../images/fitness.jpg",
    //     "../images/lifestyle.jpg",
    //     "../images/medical.jpg"
    // ]
    return (
        <Wrapper>
            <Banner>
                <div className="slide-container">
                    <Fade autoplay={true}>
                        <div className="each-fade">
                            <Image src={entertainment} />
                        </div>
                        <div className="each-fade">
                            <Image src={fitness} />
                        </div>
                        <div className="each-fade">
                            <Image src={lifestyle} />
                        </div>
                        <div className="each-fade">
                            <Image src={medical} />
                        </div>
                    </Fade>
                </div>
            </Banner>
            <Label>Popular Brands</Label>
            <Label>Most popular articles</Label>
            {theCategories &&
                <ProductsList>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                </ProductsList>}
        </Wrapper>
    )
}

const Wrapper=styled.div`
    width:100%;
`;

const Banner=styled.div`
    width:inherit;
    object-fit:cover;
    height:500px;
    div{
        width:inherit;
        height:inherit;
        top:55px;
    }
`;

const Image=styled.img`
    width:inherit;
    object-fit:cover;
    height:500px;
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

const Div=styled.div`
    margin: 10px;
    height:200px;
    width:200px;
    /* border:1px solid; */
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