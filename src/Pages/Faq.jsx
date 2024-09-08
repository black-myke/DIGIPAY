import React from 'react'

const Faq = () => {
  return (
    <div className="faq">
      <div className="faqOne">
        <h2>
          Any Questions? <br /> We Got You
        </h2>
        <p>
          Everything you need to know about DigiPay platform and your business
          registration
        </p>
        <a href="#">More FAQ &#10230; </a>
      </div>

      <div className="faqTwo">
        <div className="accordion">
          <p>What is the purpose of this platform?</p>
          <span>+</span>
        </div>

        <div className="accordion">
          <p>Is there a fee to register my account?</p>
          <span>+</span>
        </div>

        <div className="accordion">
          <p>What payment methods can I offer my customers?</p>
          <span>+</span>
        </div>

        <div className="accordion">
          <p>What support options are available if I need help?</p>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

export default Faq