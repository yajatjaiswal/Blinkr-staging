import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdharForm() {
  const navigate = useNavigate();
  const [adhar, setAdhar] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateAdhar = (adhar) => {
    const adharRegex = /^\d{12}$/;
    return adharRegex.test(adhar);
  };

  const handleAdharChange = (e) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces
    if (/^\d{0,12}$/.test(value)) {
      // Format the number as 4-4-4
      let formattedValue = value;
      if (value.length > 4) {
        formattedValue = value.slice(0, 4) + ' ' + value.slice(4);
      }
      if (value.length > 8) {
        formattedValue = formattedValue.slice(0, 9) + ' ' + formattedValue.slice(9);
      }
      setAdhar(formattedValue);
      setErrors(prev => ({ ...prev, adhar: '' }));
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    
    if (!validateAdhar(adhar.replace(/\s/g, ''))) {
      newErrors.adhar = 'Please enter a valid 12-digit Aadhar number';
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsLoading(true);
        // Add your API call here if needed
        navigate('/apply/otp-adhar');
      } catch (error) {
        console.log(error);
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to process. Please try again.'
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
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Enter Aadhar Number</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Please enter your Aadhar number below</p>

          <input
            type="text"
            value={adhar}
            onChange={handleAdharChange}
            placeholder="XXXX XXXX XXXX"
            maxLength="14"
            className={`w-full h-10 sm:h-12 border-2 ${errors.adhar ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors mb-2 tracking-wider`}
          />
          {errors.adhar && <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">{errors.adhar}</p>}

          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'SUBMIT'}
          </button>
          {errors.submit && <p className="text-red-500 text-xs sm:text-sm mt-2">{errors.submit}</p>}
        </div>
      </div>
    </>
  );
}

export default AdharForm; 