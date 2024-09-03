import React from 'react'
import PartnerProps from './PartnerProps';
import Shopify from '../images/shopify.svg'
import BigCommerce from '../images/bigcommerce.svg'
import Amazon from '../images/amazon.svg'
import Paypal from '../images/paypal.svg'
import Square from '../images/square.svg'
import Stripe from '../images/stripe.svg'

const Partners = () => {
  return (
    <div className="partners">
      <div className="partnersText">
        <p>
          Trusted by <b>150,000+</b> businesses & <b>200,000+</b> individuals
        </p>
      </div>
      
      <div className="partnersLayout">
        <PartnerProps
          partnerImg={Shopify}
          imgAlt={"shopify"}
          partnerBrand={"Shopify"}
        />
        <PartnerProps
          partnerImg={Stripe}
          imgAlt={"stripe"}
          partnerBrand={"Stripe"}
        />
        <PartnerProps
          partnerImg={Amazon}
          imgAlt={"amazon"}
          partnerBrand={"Amazon"}
        />
        <PartnerProps
          partnerImg={Paypal}
          imgAlt={"paypal"}
          partnerBrand={"Paypal"}
        />
        <PartnerProps
          partnerImg={Square}
          imgAlt={"square"}
          partnerBrand={"Square"}
        />
        <PartnerProps
          partnerImg={BigCommerce}
          imgAlt={"big commerce"}
          partnerBrand={"BigCommerce"}
        />
      </div>
    </div>
  );
}


export default Partners