import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function OTP({ contactType = 'mobile' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  // Get the data passed from previous pages
  const { request_id, PAN, phone } = location.state || {};
  const { email, isOfficial } = location.state || {};

  useEffect(() => {
    // if (contactType === 'mobile' && (!request_id || !PAN || !phone)) {
    //   navigate('/apply/pan-mobile');
    // } else if (contactType === 'email' && !email) {
    //   navigate('/apply/email');
    // } else if (contactType === 'adhar') {
    //   navigate('/apply/adhar-card');
    // }
  }, [request_id, PAN, phone, email, navigate, contactType]);

  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];
    
    pastedData.split('').forEach((char, index) => {
      if (index < 6 && !isNaN(Number(char))) {
        newOtp[index] = char;
      }
    });
    
    setOtp(newOtp);
  };

  const handleMobileSubmit = async (otpValue) => {

    navigate('/apply/employment-status');
    // try {
    //   setIsLoading(true);
    //   const data = JSON.stringify({
    //     "otp": otpValue,
    //     "request_id": request_id,
    //     "PAN": PAN,
    //     "phone": phone
    //   });

    //   const config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'http://localhost:8000/api/user/verify-otp',
    //     headers: { 
    //       'Content-Type': 'application/json',
    //       'Cookie': 'user_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQzNjY3NjkzLCJleHAiOjE3NDYyNTk2OTN9.zXwwYAYvkRuTS9vBRqK0cd8Fo5-W8-dbVDykwV1jVTc'
    //     },
    //     data: data
    //   };

    //   const response = await axios.request(config);
    //   console.log(JSON.stringify(response.data));
    //   navigate('/apply/employment-status');
    // } catch (error) {
    //   console.log(error);
    //   setError('Invalid OTP. Please try again.');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleEmailSubmit = (otpValue) => {
    navigate('/apply/loan-eligibility');
  };

  const handleAdharSubmit = (otpValue) => {
    navigate('/apply/congratulations-card');
  };

  const handleSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    switch (contactType) {
      case 'mobile':
        await handleMobileSubmit(otpValue);
        break;
      case 'email':
        handleEmailSubmit(otpValue);
        break;
      case 'adhar':
        handleAdharSubmit(otpValue);
        break;
      default:
        setError('Invalid contact type');
    }
  };

  const handleResendOTP = async () => {
    try {
      setIsLoading(true);
      if (contactType === 'mobile') {
        const data = JSON.stringify({
          "PAN": PAN,
          "phone": phone
        });

        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/api/user/send-otp',
          headers: { 
            'x-karza-key': 'uounjfn7c90ognmIYND2', 
            'Content-Type': 'application/json'
          },
          data: data
        };

        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      }
      setError('');
    } catch (error) {
      console.log(error);
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getContactMessage = () => {
    switch (contactType) {
      case 'mobile':
        return 'We have sent OTP to your mobile number';
      case 'email':
        return `We have sent OTP to your ${isOfficial ? 'official' : 'personal'} email address`;
      case 'adhar':
        return 'We have sent OTP to your mobile number linked to Aadhar';
      default:
        return 'We have sent OTP to your mobile number';
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-4 pt-8 pb-12 md:px-8">
        <div className="bg-white rounded-2xl p-4 sm:p-6 w-[280px] sm:w-[320px] shadow-lg">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Enter OTP</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{getContactMessage()}</p>

          <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-4 justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-7 h-7 sm:w-9 sm:h-9 border-2 border-gray-300 rounded-lg text-center text-sm sm:text-base font-semibold focus:border-purple-500 focus:outline-none transition-colors"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-xs sm:text-sm mb-3">{error}</p>}

          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold py-1.5 sm:py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'SUBMIT'}
          </button>

          <button 
            className="w-full text-purple-600 hover:text-purple-700 text-xs sm:text-sm font-medium mt-2 sm:mt-3 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleResendOTP}
            disabled={isLoading}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </>
  );
}

export default OTP;
