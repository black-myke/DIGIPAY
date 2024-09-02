import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='navBody'>
        <nav>
            <span className='logo'><img src={Logo} alt='digipay logo' /></span>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>How it works</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>

            <div className='navButton'>
                <button className='btn-1'>Sign in</button>
                <button className='btn-2'>Create a free account</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar