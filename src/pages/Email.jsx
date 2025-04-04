import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Email() {
  const navigate = useNavigate();
  const [personalEmail, setPersonalEmail] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePersonalEmailChange = (e) => {
    setPersonalEmail(e.target.value);
    setErrors(prev => ({ ...prev, personalEmail: '' }));
  };

  const handleOfficialEmailChange = (e) => {
    setOfficialEmail(e.target.value);
    setErrors(prev => ({ ...prev, officialEmail: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!personalEmail) {
      newErrors.personalEmail = 'Personal email is required';
    } else if (!validateEmail(personalEmail)) {
      newErrors.personalEmail = 'Please enter a valid personal email';
    }
    
    if (officialEmail && !validateEmail(officialEmail)) {
      newErrors.officialEmail = 'Please enter a valid official email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      // If official email is provided, verify it first, otherwise verify personal email
      const emailToVerify = officialEmail || personalEmail;
      navigate('/apply/otp-email', { 
        state: { 
          email: emailToVerify,
          isOfficial: !!officialEmail 
        }
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 py-22 md:px-16">
        <div className="bg-white rounded-3xl p-8 w-[420px] shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter Your Email Address</h2>
          

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-gray-700 text-sm font-medium mb-1 block">
                Personal Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={personalEmail}
                onChange={handlePersonalEmailChange}
                placeholder="example@gmail.com"
                className={`w-full h-12 border-2 ${errors.personalEmail ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 text-base focus:border-purple-500 focus:outline-none transition-colors`}
              />
              {errors.personalEmail && <p className="text-red-500 text-xs mt-1">{errors.personalEmail}</p>}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium mb-1 block">
                Official Email 
              </label>
              <input
                type="email"
                value={officialEmail}
                onChange={handleOfficialEmailChange}
                placeholder="example@company.com"
                className={`w-full h-12 border-2 ${errors.officialEmail ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 text-base focus:border-purple-500 focus:outline-none transition-colors`}
              />
              {errors.officialEmail && <p className="text-red-500 text-xs mt-1">{errors.officialEmail}</p>}
              <p className="text-gray-500 text-xs mt-1">Adding your official email can help increase your loan amount</p>
            </div>
          </div>

          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading || !personalEmail}
          >
            {isLoading ? 'Processing...' : 'SUBMIT'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Email;
