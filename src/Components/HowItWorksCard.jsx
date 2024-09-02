import React from 'react'
import SignImg from '../images/signUpImg.png'
import SetUpImg from '../images/setUpImg.png'
import VerifyImg from '../images/verifyImg.png'

const HowItWorksCard = (props) => {

    const {StepId, StepImg, StepName, StepDescrp} = props;
  return (
    <div className='howItWorksCard'>
        <span>{StepId}</span>
        
        <div className="processBox">
            <img src={StepImg} alt='sign-in image' />
            <h3> {StepName} </h3>
            <p> {StepDescrp} </p>
            <a href='#'>Learn More &#10230;</a>
        </div>
    </div>
  )
}

export default HowItWorksCard