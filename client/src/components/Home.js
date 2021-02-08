import React, { useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import bags from '../images/bags.png';

const Home=()=>{
    const theCategories = useSelector(state=>state.items.items);
    useEffect(()=>{
        if(theCategories){
        const item1=theCategories[Math.floor(Math.random() * 348) + 1];
        const item2=theCategories[Math.floor(Math.random() * 348) + 1];
        const item3=theCategories[Math.floor(Math.random() * 348) + 1];
        const item4=theCategories[Math.floor(Math.random() * 348) + 1];
        const item5=theCategories[Math.floor(Math.random() * 348) + 1];
        console.log(item1)
    }
    },[theCategories])
    // console.log(theCategories);
    return (
        <Wrapper>
            <Header>
                <Menu />
            </Header>
            <Body>
                {/* <Image src={bags} /> */}
                <SiteName>
                    BluCast
                </SiteName>
            </Body>
            {theCategories &&
                <Footer>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                    <Div><Img src={theCategories[Math.floor(Math.random() * 348) + 1].imageSrc}/></Div>
                </Footer>}
        </Wrapper>
    )
}

const Wrapper=styled.div`
`;

const Header=styled.section`
`;

const Body=styled.section`
    width:100vw;
    object-fit:cover;
    height:calc(100vh - 20em);
`;

// const Image=styled.Img`
//     width:100vw;
//     object-fit:cover;
//     height:calc(100vh - 5em);
// `;

const SiteName=styled.p`
    width:inherit;
    height:inherit;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    color:white;
    font-size:11em;
    margin-block-start: 0;
    margin-block-end: 0;
    text-shadow: 0px 1px 9px #24100A;
`;

const Footer=styled.section`
    object-fit: cover;
    display: flex;
    flex-direction: row;
`;

const Div=styled.div`
    width:99%;
    height:45vh;
    padding:5px;
`;

const Img=styled.img`
    width:inherit;
    height:inherit;
`;

export default Home;