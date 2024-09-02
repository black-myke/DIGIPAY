import React from 'react'
import Payment from '../images/payment.svg'

const OurServicesCard = (props) => {

    const {serviceImg, serviceHeading, serviceText} = props;
  return (
    <div className='serviceCard'>
        <img src={serviceImg} alt='service icon' />
        <h3>{serviceHeading}</h3>
        <p> {serviceText} </p>
    </div>
  )
}

export default OurServicesCard