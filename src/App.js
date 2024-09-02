import "./App.css";
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx"
import Service from "./Pages/Service.jsx"
import HowItWorks from "./Pages/HowItWork.jsx"
import Faq from "./Pages/Faq.jsx"
import ContactUs from "./Pages/ContactUs.jsx"
import SignIn from "./Pages/SignIn.jsx"
import SignUp from "./Pages/SignUp.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="" element={<HomePage />} />
          <Route path="" element={<Service />} />
          <Route path="" element={<HowItWorks />} />
          <Route path="" element={<Faq />} />
          <Route path="" element={<ContactUs />} />
          <Route path="" element={<SignIn />} />
          <Route path="" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
