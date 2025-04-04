import React, { useState } from "react";
import Cards2 from "./Cards2";
import Test from "./Test";
import hero from "../../assets/hero.png";
import iciciLogo from "../../assets/iciciLogo.png";
import Navbar from "../../components/Navbar";
import icon from "../../assets/icon.png";
import logo2 from "../../assets/logo2.svg";
import concentricCircle from "../../assets/concentricCircle.svg";
import { useNavigate } from 'react-router-dom';
import yellowGradient from "../../assets/yellowGradient.svg";
import Calculator from "../../components/Calculator";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply/pan-mobile');
  };

  return (
    <div className="bg-white min-h-[100vh] w-full">
      {/* Navbar */}
      <div className="min-h-[100vh] bg-gradient-to-br from-[#4D38DD] via-[#9A54F7] to-[#E6E0FF] rounded-[30px] p-4 sm:p-6 md:p-12 text-white mt-2 sm:mt-3 mx-2 sm:mx-3 relative overflow-hidden z-0">
        <img
          src={yellowGradient}
          alt="Yellow Gradient"
          className="absolute top-0 left-100 w-[100%] h-[100%] opacity-100"
        />
        <Navbar />

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mt-4 sm:mt-6">
          <div className="text-center md:text-left px-2 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">Loan in a <span className="text">Blink</span></h1>

            <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-6 sm:leading-7 md:leading-9">
              RBI Regulated; we are a new-age Fin-Tech platform
              <br className="hidden sm:block" />
              We offer emergency loans Short Term Salaried / Payday Loans
              <br className="hidden sm:block" />
              and Micro Business Loans crafted to provide a quick, dependable
              <br className="hidden sm:block" />
              and compassionate financial solution.
            </p>
            <button 
              onClick={handleApplyNow}
              className="cursor-pointer bg-purple-900 text-white py-2 md:py-3 px-4 md:px-8 rounded-md text-sm md:text-lg font-medium mt-5 hover:bg-purple-800"
            >
              Apply Now
            </button>
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
              <p className="text-white text-sm sm:text-base font-semibold">Insured by</p>
              <img src={iciciLogo} alt="ICICI Logo" className="h-3 sm:h-4 md:h-5" />
              <p className="text-white italic text-sm sm:text-base font-medium">Lombard Insurance</p>
            </div>
          </div>

          {/* Responsive Character Image */}
          {/* <div className="flex justify-center items-center mt-4 sm:mt-0">
            <img src={hero} alt="Character" className="w-36 sm:w-48 md:w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px] transition-all duration-300" />
          </div> */}

          <div className="flex justify-center items-center mt-4 sm:mt-0 relative">
            <img
              src={concentricCircle}
              alt="Concentric Circle"
              style={{
                position: 'absolute',
                top: '-16%',
                left: '12%',
                width: '80%',
                height: '80%',
                animation: 'spin 20s linear infinite'
              }}
            />
            <img src={hero} alt="Character" className="sm:w-48 md:w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px] transition-all duration-300 relative z-10" />
          </div>
        </div>
      </div>
      <Calculator />
      <Cards2 />
      <Test />
    </div>
  );
}

export default Home;

//<img src={concentricCircle} alt="Concentric Circle" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]" />
//  <img
// src={concentricCircle}
// alt="Concentric Circle"
// className="absolute top-[22%] left-[51%] w-[60%] h-[45%] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite]"
// />

