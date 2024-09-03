import React from 'react'
import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Logo} alt='DigiPay Logo' />

        <div className="footerOne">
            <div className="footerOneText">
                <a href="#">Services</a>
                <a href="#">How It Works</a>
                <a href="#">FAQs</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="footerOneBtn">
                <button className='btn-1'>Learn More</button>
                <button className='btn-2'>Get Started</button>
            </div>
        </div>
        <hr className='footerDivider' />
        <div className='footerTwo'>
            <p>&copy; Copyright 2024. All Rights Reserved</p>

            <div className="footerTwoTerms">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer