import React from 'react';
// import flag from '../images/nigeria.png'

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUsOne">
        <h2>Contact Us</h2>
        <p>
          Email, call or complete the form to learn how digipay can solve your
          problem.
        </p>

        <a href="/">info@digipay.io</a>
        <a href="/">+234-7063195082</a>
        <h4>Customer Support</h4>

        <div className="contactUsBox">
          <div className="customerSupport">
            <h3>Customer Support</h3>
            <p>
              Our support team is available around the clock to address any
              concern or queries you may have.
            </p>
          </div>

          <div className="feedback">
            <h3>Feedback and Suggestions</h3>
            <p>
              We value your feedback and we are continuously working to improve
              digipay. Your input is cruicial in shaping the future of digipay.
            </p>
          </div>
        </div>
      </div>

      <div className="contactUsTwo">
        <form action="" method="POST">
          <h3>Get in Touch</h3>
          <p>You can reach out to us at anytime</p>

          <label for="fullName">
            Full Name
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
            />
          </label>

          <label for="email">
            Email Address
            <input type="email" name="email" id="email" placeholder="Email" />
          </label>

          <label for="phoneNumber">
            Phone Number
            <span id='phoneNumberBox'>
              <select>
                <option value="+234">+234</option>
              </select>
              <input type="number" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' />
            </span>
          </label>

          <textarea name="message" id="message" cols="30" rows="6" placeholder='How can we help?'></textarea>

          <input type="submit" value="Submit" />

          <p>By contacting us, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b> </p>
        </form>
      </div>
    </div>
  );
}

export default ContactUs