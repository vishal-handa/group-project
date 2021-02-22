import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({status}) => {
    return (
        //wrapper for the hamburger menu
        <Wrapper>
            <p className={status}/>
            <p className={status}/>
            <p className={status}/>
        </Wrapper>
    );
};

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    //styling for the hamburger menu lines
    &>p{
        background-color: white;
        width: 32px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        transition:all ease 0.3s;
    }
    //styling using classes for opening action.
    &>.open:nth-child(1) {
        transform: rotate(45deg) translateY(8px) translateX(8px);
        background-color: black;
    }

    &>.open:nth-child(2) {
        opacity: 0;
    }

    &>.open:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px) translateX(8px);
        background-color: black;
    }

    //styling using classes for closing action.
    &>.close:nth-child(1) {
        transform: rotate(0) translateY(0);
    }

    &>.close:nth-child(2) {
        opacity: 1;
    }

    &>.close:nth-child(3) {
        transform: rotate(0) translateY(0);
    }

`;

export default BurgerMenu;