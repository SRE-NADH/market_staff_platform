import React from 'react';
import './style.css';
import vectorImage from '../../../../../public/assets/Vector-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-left'>
         <img src={vectorImage} alt="icon" />
         <p>Talup 2023. All rights reserved</p>
       </div>
       <div className='footer-right'>
         <p>Terms & Conditions</p>
         <p>Privacy Policy</p>
       </div>
    </div>
  )
}

export default Footer;