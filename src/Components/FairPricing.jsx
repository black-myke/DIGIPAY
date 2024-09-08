import React from 'react';
import { Link } from 'react-router-dom';

const FairPricing = () => {
    return (
      <div className="fairPricing">
        <div className="fairPricingBackground">
          <h2>Digipay</h2>
        </div>

        <div className="fairPricingOverlay">
          <h2>
            Fair Pricing, No <span className="overlayHighlight">Surprises</span>
          </h2>
          <p>Apply for an account in 3 simple steps. Get your Digipay account today</p>
          <button className="btn-2">
            <Link to="sign-up" className="navBtn2">
            Create a free account
            </Link>
          </button>
        </div>
      </div>
    );
}

export default FairPricing