import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import Home from "./pages/landingpage/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OTP from "./pages/OTP";
import PanMobileForm from "./pages/PanMobileForm";
import AddressForm from "./pages/AddressForm";
import BasicLayout from "./layout/BasicLayout";
import StepsLayout from "./layout/StepsLayout";
import EmploymentStatus from "./pages/EmployementStatus";
import Email from "./pages/Email";
import ThankYouCard from "./pages/ThankYouCard";
import AmountSlider from "./pages/AmountSlider";
import CongratulationsCard from "./pages/CongratulationsCard";
import LoanEligibility from "./pages/LoanEligibility";
import AdharCard from "./pages/AdharForm";
import References from "./pages/References";
import Dashboard from "./pages/Dashboard";
import ESign from "./pages/E-Sign";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            {/* Basic Layout */}
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            {/* Steps Layout */}
            <Route path="apply" element={<StepsLayout />}>
              <Route path="pan-mobile" element={<PanMobileForm />} />
              <Route path="otp-mobile" element={<OTP contactType="mobile" />} />
              <Route path="otp-email" element={<OTP contactType="email" />} />
              <Route path="otp-adhar" element={<OTP contactType="adhar" />} />
              <Route path="add" element={<AddressForm />} />
              <Route path="employment-status" element={<EmploymentStatus />} />
              <Route path="email" element={<Email />} />
              <Route path="thank-you" element={<ThankYouCard />} />
              <Route path="amount-slider" element={<AmountSlider />} />
              <Route path="/apply/loan-eligibility" element={<LoanEligibility />} />
              <Route path="/apply/adhar-card" element={<AdharCard />} />
              <Route path="/apply/references" element={<References />} /> 
              <Route path="/apply/e-sign" element={<ESign />} />
              <Route
                path="congratulations-card"
                element={<CongratulationsCard />}
              />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
