import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PanMobileForm() {
  const navigate = useNavigate();
  const [pan, setPan] = useState('');
  const [mobile, setMobile] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [showConsentError, setShowConsentError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validatePan = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z0-9]{0,10}$/.test(value)) {
      setPan(value);
      setErrors(prev => ({ ...prev, pan: '' }));
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);
      setErrors(prev => ({ ...prev, mobile: '' }));
    }
  };

  const handleCheckboxClick = (e) => {
    e.preventDefault();
    setShowConsent(true);
  };

  const handleConsentAgree = () => {
    setIsChecked(true);
    setShowConsent(false);
    setShowConsentError(false);
  };

  const handleConsentDecline = () => {
    setIsChecked(false);
    setShowConsent(false);
  };

  const handleSubmit = async () => {
    const newErrors = {};
    
    if (!validatePan(pan)) {
      newErrors.pan = 'Please enter a valid PAN number';
    }
    
    if (!validateMobile(mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!isChecked) {
      setShowConsentError(true);
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsLoading(true);
        const data = JSON.stringify({
          "PAN": pan,
          "phone": mobile
        });

        // const config = {
        //   method: 'post',
        //   maxBodyLength: Infinity,
        //   url: 'http://localhost:8000/api/user/send-otp',
        //   headers: { 
        //     'x-karza-key': 'uounjfn7c90ognmIYND2', 
        //     'Content-Type': 'application/json'
        //   },
        //   data: data
        // };

        // const response = await axios.request(config);
        // console.log(JSON.stringify(response.data));
        navigate('/apply/otp-mobile'
        //    { 
        //   state: { 
        //     request_id: response.data.request_id,
        //     PAN: pan,
        //     phone: mobile
        //   }
        // }
      );
      } catch (error) {
        console.log(error);
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to send OTP. Please try again.'
        }));
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 pt-15 pb-20 md:px-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 w-[315px] sm:w-[420px] shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Enter PAN & Mobile Number</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Please enter your details below</p>

          <input
            type="text"
            value={pan}
            onChange={handlePanChange}
            placeholder="Enter PAN (e.g., ABCDE1234F)"
            className={`w-full h-10 sm:h-12 border-2 ${errors.pan ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors mb-2`}
          />
          {errors.pan && <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">{errors.pan}</p>}

          <input
            type="text"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter Mobile Number"
            className={`w-full h-10 sm:h-12 border-2 ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors mb-2`}
          />
          {errors.mobile && <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">{errors.mobile}</p>}

          <div className="flex items-center mb-4 sm:mb-6">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxClick}
              className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
            />
            <label 
              className="ml-2 text-xs sm:text-sm text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
              onClick={handleCheckboxClick}
            >
              I agree to the <span className="text-purple-600 hover:underline">terms and conditions</span>
            </label>
          </div>
          {showConsentError && <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">Please agree to the terms and conditions</p>}

          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Sending OTP...' : 'SUBMIT'}
          </button>
          {errors.submit && <p className="text-red-500 text-xs sm:text-sm mt-2">{errors.submit}</p>}
        </div>
      </div>

      {showConsent && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-[90%] sm:w-full mx-4 shadow-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Terms and Conditions</h3>
            <div className="max-h-80 sm:max-h-96 overflow-y-auto mb-3 sm:mb-4">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                By agreeing to these terms and conditions, you acknowledge that:
              </p>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-sm sm:text-base space-y-1.5 sm:space-y-2">
                <li>You are providing accurate and truthful information</li>
                <li>Your PAN and mobile number will be used for verification purposes</li>
                <li>We may contact you regarding your application</li>
                <li>Your information will be handled in accordance with our privacy policy</li>
                <li>You consent to receive communications via SMS and email</li>
                <li>You understand that providing false information may result in application rejection</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3 sm:space-x-4">
              <button
                onClick={handleConsentDecline}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors text-sm sm:text-base"
              >
                Decline
              </button>
              <button
                onClick={handleConsentAgree}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition-colors text-sm sm:text-base"
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PanMobileForm;