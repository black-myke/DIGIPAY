import React from 'react';

const PartnerProps = ( props ) => {

    const {partnerImg, partnerBrand, imgAlt} = props;

    return (
        <div className='partnerProps'>
          <img src={partnerImg} alt={imgAlt}/>
          <span>{partnerBrand}</span>  
        </div>
    );
}

export default PartnerProps