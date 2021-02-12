import React, { useState } from 'react';
import './style.css';

const BurgerMenu = ({status}) => {
    
    return (
        
        <div className="BurgerMenu__container">
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
        </div>
        
    );
};

export default BurgerMenu;