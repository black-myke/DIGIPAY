import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx"
import Service from "./Pages/Service.jsx"
import HowItWorks from "./Pages/HowItWork.jsx"
import Faq from "./Pages/Faq.jsx"
import ContactUs from "./Pages/ContactUs.jsx"
// import SignIn from "./Pages/SignIn.jsx"
// import SignUp from "./Pages/SignUp.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  
  return (

    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/services"  element={<Service />} />

          <Route path="/how-it-works"  element={<HowItWorks />} />
          <Route path="/faq"  element={<Faq />} />
          <Route path="/contact-us"  element={<ContactUs />} />
          {/* <Route path="/sign-in" element={<SignIn />} /> */}
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
    
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
