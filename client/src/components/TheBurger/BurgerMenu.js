import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({status}) => {
    return (
        <Wrapper>
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
        </Wrapper>
    );
};

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    &>i{
        background-color: gray;
        width: 32px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        transition:all ease 0.3s;
    }

    &>.open:nth-child(1) {
        transform: rotate(45deg) translateY(8px) translateX(8px);
    }

    &>.open:nth-child(2) {
        opacity: 0;
    }

    &>.open:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px) translateX(8px);
    }


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