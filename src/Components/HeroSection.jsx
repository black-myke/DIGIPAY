import React from 'react'
import heroImage from '../images/hero-img.png'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="heroHead">
      <div className="heroText">
        <h1>
          Register Your <br />
          <span>Business</span> Account <br />
          Today
        </h1>

        <p>
          Ready to take your business to the next level? Register your account
          in minutes and thousands of other successful merchants on our
          platform.
        </p>

        <div className="heroButton">
          <button className="btn-2">
            <Link to="/sign-up" className="navBtn2">
              Get Started
            </Link>
          </button>
          <button className="btn-1">
            <Link to="/faq" className="learnLink">
              Learn More
            </Link>
          </button>
        </div>
      </div>

      <div className="heroImg">
        <img src={heroImage} alt="digipay hero" />
      </div>
    </div>
  );
}

export default HeroSection