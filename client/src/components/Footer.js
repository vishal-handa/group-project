import React from "react";
import styled from 'styled-components';
import { FaFacebookSquare, 
        FaTwitterSquare,
        FaLinkedin,
        FaYoutubeSquare,
        FaInstagramSquare
    } from "react-icons/fa";

const Footer=()=>{
    return(
        <Wrapper>
            <div>
                <h3>Customer Support</h3>
                <p>Contact Us</p>
                <p>Help Center</p>
                <p>Returns & Exchange</p>
                <p>BluCast Financing</p>
                <p>Gift Cards</p>
            </div>
            <div>
                <h3>Account</h3>
                <p>Order Status</p>
                <p>Manage Account</p>
                <p>Email Preferences</p>
                <p>Newsletter</p>
            </div>
            <div>
                <h3>About Us</h3>
                <p>Company History</p>
                <p>Corporate Information</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
            </div>
            <section>
                <h3>Social Media</h3>
                <div>
                    <span>
                        <FaInstagramSquare size={17}/>{"  "}
                    </span> 
                    <span style={{marginTop:'7px'}}>
                        Instagram
                    </span>
                </div>
                <div>
                    <span>
                        <FaFacebookSquare size={17}/>{"  "}
                    </span> 
                    <span>
                        Facebook
                    </span>
                </div>
                <div>
                    <span>
                        <FaTwitterSquare size={17}/>{"  "}
                    </span> 
                    <span>
                        Twitter
                    </span>
                    </div>
                <div>
                    <span>
                        <FaLinkedin size={17}/>{"  "}
                    </span> 
                    <span>
                        LinkedIn
                    </span>
                </div>
                <div>
                    <span>
                        <FaYoutubeSquare size={17}/>{"  "}
                    </span> 
                    <span>
                        YouTube
                    </span>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    padding:40px 20px 20px 20px;
    background-color:black;
    width:inherit;
    &>div>p{
        font-size:13px;
        color:white;
    }
    span{
        font-size:13px;
        margin-bottom:1em;
        color:white;
    }
    &>section>div{
        margin-block-start: 1em;
        margin-block-end: 1em;
    }
    h3{
        color:white;
    }
`;

export default Footer;