import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="navBody">
      <nav>
        <span className="logo">
          <img src={Logo} alt="digipay logo" />
        </span>
        <ul>
          <li>
            <NavLink activeClassName="active-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/how-it-works">
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/contact-us">
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="navButton">
          <button className="btn-1">
            <Link to="/sign-in" className="navBtn1">
              Sign in
            </Link>
          </button>
          <button className="btn-2" style={{ color: "white" }}>
            <Link to="/sign-up" className="navBtn2">
              Create a free account
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar