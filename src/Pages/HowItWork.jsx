import React from 'react';
import HowItWorksCard from '../Components/HowItWorksCard';
import SignImg from '../images/signUpImg.png';
import VerifyImg from '../images/setUpImg.png';
import SetUpImg from '../images/verifyImg.png';

const HowItWork = () => {

  const stepOneDescrp = "Start by filling out a simple registration form. Provide your business details, including your name, contact information and business type.";
  const stepTwoDescrp = "After registration, we will guide you through a quick verification process to ensure your account and details are verified.";
  const stepThreeDescrp = "Choose your preferred payment method and set up your account to start accepting payment immediatley for your business.";


  return (
    <div className="howItWorks">
      <div className="howItWorksText">
        <h2>How It Works</h2>
        <p>Follow theses 3 seamless registration process and enjoy the services we have provided for you!</p>
      </div>
      <div className="howItWorksLayout">
        <HowItWorksCard
          StepId={"1"}
          StepImg={SignImg}
          StepName={"Sign Up"}
          StepDescrp={stepOneDescrp}
        />

        <HowItWorksCard
          StepId={"2"}
          StepImg={SetUpImg}
          StepName={"Verify Your Account"}
          StepDescrp={stepTwoDescrp}
        />
        
        <HowItWorksCard
          StepId={"3"}
          StepImg={VerifyImg}
          StepName={"Set Up Payment Option"}
          StepDescrp={stepThreeDescrp}
        />
      </div>
    </div>
  );
}

export default HowItWork