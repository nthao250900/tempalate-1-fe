import React from "react";
import Container from "./Container";
import { FooterStyled } from "assets/styles/common/_footer";

const Footer = () => {
 return (
  <FooterStyled>
   <Container>
    <div className='footer'>
     <div className='footer__top'>
      <div className='items'>
       <div className='item'>
        <div className='item__title'>
         <h5>Company Info</h5>
        </div>
        <ul>
         <li>About Us</li>
         <li>Carrier</li>
         <li>We are hiring</li>
         <li>Blog</li>
        </ul>
       </div>
       <div className='item'>
        <div className='item__title'>
         <h5>Legal</h5>
        </div>
        <ul>
         <li>About Us</li>
         <li>Carrier</li>
         <li>We are hiring</li>
         <li>Blog</li>
        </ul>
       </div>
       <div className='item'>
        <div className='item__title'>
         <h5>Features</h5>
        </div>
        <ul>
         <li>Business Marketing</li>
         <li>User Analytic</li>
         <li>Live Chat</li>
         <li>Unlimited Support</li>
        </ul>
       </div>
       <div className='item'>
        <div className='item__title'>
         <h5>Resources</h5>
        </div>
        <ul>
         <li>IOS & Android</li>
         <li>Watch a Demo</li>
         <li>Customers</li>
         <li>API</li>
        </ul>
       </div>
       <div className='item'>
        <div className='item__title'>
         <h5>Get In Touch</h5>
        </div>
        <div className='form'>
         <div className='form__input'>
          <input id='input__email' type='email' placeholder=' ' />
          <label htmlFor='input__email'>Your Email</label>
          <div className='button'>
           <button className='button__subscribe'>Subscribe</button>
          </div>
         </div>
         <div className='description'>
          <p>Lore imp sum dolor Amit</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </Container>
   <div className='footer__bottom'>
    <Container>
     <p>Made With Love By Finland All Right Reserved </p>
    </Container>
   </div>
  </FooterStyled>
 );
};

export default Footer;
