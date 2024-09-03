import React from 'react';
import OurServicesCard from '../Components/OurServicesCard';
import Payment from '../images/payment.svg';
import CustomerCare from '../images/customer-support.svg';
import Scam from '../images/scam-shield.svg';
import Dashboard from '../images/dashboard.png'
import Mobile from '../images/mobile.svg'
import Invoice from '../images/invoice.png'

const Service = () => {

  const seamlessPayment = "Accept payment securemly from anywhere, support for various methods like debit/credit card, bank transfers and digital wallets."
  const mobilePayment = "Our platform is optimized for mobile transactions, ensuring a smooth and fast payment process for customers on the go."
  const dashboard = "Gain insights into your sales, transactions and customer behaviour with our intuitive dashboard."
  const invoice = "Create and send professional invoices with just a few clicks, and track payments effortlessly."
  const fraud = "We offer real-time monitoring, advanced algorithm to detect fraudulent activities and comprehensive reporting."
  const support = "Our customer support team is available 24/7 to assist with any issues and ensure your payment processes runs smoothly."


  return (
    <div className="services">
      <div className="servicesText">
        <h2>Our Services</h2>
        <p>
          Empowering your business with secure, seamless and scalable payment
          solution tailored to your needs.
        </p>
      </div>

      <div className="servicesLayout">
        <OurServicesCard serviceImg={Payment} serviceHeading={"Seamless Payment Processing"} serviceText={seamlessPayment} />
        <OurServicesCard serviceImg={Mobile} serviceHeading={"Mobile Payment"} serviceText={mobilePayment} />
        <OurServicesCard serviceImg={Dashboard} serviceHeading={"Comprehensive Dashboard"} serviceText={dashboard} />
        <OurServicesCard serviceImg={Invoice} serviceHeading={"Customizable Invoices"} serviceText={invoice} />
        <OurServicesCard serviceImg={Scam} serviceHeading={"Fraud Prevention"} serviceText={fraud} />
        <OurServicesCard serviceImg={CustomerCare} serviceHeading={"Customer Support"} serviceText={support} />
      </div>
    </div>
  );
}

export default Service