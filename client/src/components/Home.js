import React, { createRef } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import banner from '../images/banner.png';
import belkin from './logos/belkin.png';
import casio from './logos/casio.png';
import lg from './logos/lg.png';
import motorola from './logos/motorola.png';
import nike from './logos/nike-new.png';
import samsung from './logos/samsung.png';

const Home=()=>{
    const theCategories = useSelector(state=>state.items.items);
    //createRef to creat a reference on click.
    const scrollRef = createRef();
    //scroll function to scroll the div based on createRef
    const handleScroll=(direction)=>{
        if(direction==="left"){
            scrollRef.current.scrollLeft -= 200;
        }
        else{
            scrollRef.current.scrollLeft += 200;
        }
    }
    //following two functions create an array of unique random integers between 0 and 348
    const randomNum=(min, max)=>{
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const nums=(num)=>{
        let ints = [];
        while (ints.length < num) {
            let randNum = randomNum(1, 348);
            if(!ints.indexOf(randNum) > -1){
            ints.push(randNum);
            }
        }
        return ints;
    }
    const randomArray = nums(10);
    return (
        <Wrapper>
            {/* main banner */}
            <Banner>
                <Image src={banner}/>
            </Banner>
            {/* part 2 of the home page which includes the logos of the most popular branda with links to their respective company pages */}
            <Div1>
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
            </Div1>
            {/* Another part of the homepage that displays random articles from the database that uses the scroll functions. */}
            <Div2>
                <Label>Most popular articles</Label>
                <Div3>
                    <ScrollButton type="button" onClick={()=>handleScroll("left")}
                        >{'<'}</ScrollButton>
                    {(theCategories && randomArray) &&
                        <ProductsList ref={scrollRef}>
                            {randomArray.map((elem)=>{
                                return (
                                    <StyledLink key={elem} to={`/products/${theCategories[elem]._id}`}>
                                        <Img src={theCategories[elem].imageSrc}/>
                                    </StyledLink>
                                )
                            })}
                    </ProductsList>}
                    
                    <ScrollButton type="button" onClick={()=>handleScroll("right")}
                    >{'>'}</ScrollButton>
                </Div3>
            </Div2>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    width:100%;
    scroll-snap-type: y mandatory;
    scroll-snap-type: x none;
`;

const Banner=styled.div`
    width:inherit;
    top:57px;
    scroll-snap-align:start;
`;

const Image=styled.img`
    width:inherit;
    height:600px;
    object-fit:cover;
`;

const Div1= styled.div`
    height:520px;
    background-color:#ffd6e0;
    scroll-snap-align:start;
`;

const Div2= styled.div`
    height:500px;
    background-color:#c4f3ff;
    scroll-snap-align:start;
`;

const Div3=styled.div`
    display:flex;
    flex-direction:row nowrap;
    justify-content:space-between;
    align-items:center;
`;

const ScrollButton=styled.button`
    background:white;
    height:50px;
    width:50px;
    margin:90px 20px 20px 20px;
    border-radius:50%;
    font-size:30px;
    transition:0.4s;
    border:1px solid gray;
    &:hover{
        cursor: pointer;
        background:black;
        color:white;
    }
`;

const Label=styled.p`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    color:black;
    font-size:5em;
    font-weight:900;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-top:50px;
    /* text-shadow: 0px 1px 9px #24100A; */
`;

const LogoContainer=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    margin: 20px 12% 30px 12%;
    align-items:center;
`;

const Logo=styled.img`
    height:150px;
    width:250px;
    padding:5px;
    margin-inline-end:20px;
`;

const ProductsList=styled.div`
    display:flex;
    flex-flow: row nowrap;
    padding-top:90px;
    width:80%;
    scroll-snap-type: x mandatory;
    scroll-snap-type: y none;
    overflow-x:scroll;
    scroll-behavior: smooth;
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
    transition: transform 0.3s;
    object-fit:cover;
    &:hover{
        transform:scale(1.1);
    }
`;


export default Home;
