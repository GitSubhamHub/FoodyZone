import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure nam totam.</p>
                {/* <div className="footer-social-icons">
                    <img src={} alt="" />  fb icon
                    <img src={} alt="" />   twitter icon
                    <img src={} alt="" />    linkedin icon
                </div> */}
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-920560000</li>
                    <li>contact@yfc.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 YFC.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer