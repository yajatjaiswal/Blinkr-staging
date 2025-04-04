import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function References() {
  const navigate = useNavigate();
  const [references, setReferences] = useState({
    reference1: '',
    reference2: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateMobile = (mobile) => {
    return /^[6-9]\d{9}$/.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d{0,10}$/.test(value)) {
      setReferences(prev => ({
        ...prev,
        [name]: value
      }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!references.reference1) {
      newErrors.reference1 = 'Please enter Reference 1 mobile number';
    } else if (!validateMobile(references.reference1)) {
      newErrors.reference1 = 'Please enter a valid 10-digit mobile number';
    }

    if (!references.reference2) {
      newErrors.reference2 = 'Please enter Reference 2 mobile number';
    } else if (!validateMobile(references.reference2)) {
      newErrors.reference2 = 'Please enter a valid 10-digit mobile number';
    }

    if (references.reference1 === references.reference2) {
      newErrors.reference2 = 'Reference 2 cannot be same as Reference 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      // Add your API call here if needed
      navigate('/apply/loan-eligibility');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 pt-15 pb-20 md:px-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 w-[315px] sm:w-[420px] shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">References</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Please enter mobile numbers of two references</p>

          {/* Reference 1 */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Reference 1
            </label>
            <input
              type="text"
              name="reference1"
              value={references.reference1}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className={`w-full h-10 sm:h-12 border-2 ${errors.reference1 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
            />
            {errors.reference1 && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.reference1}</p>
            )}
          </div>

          {/* Reference 2 */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Reference 2
            </label>
            <input
              type="text"
              name="reference2"
              value={references.reference2}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className={`w-full h-10 sm:h-12 border-2 ${errors.reference2 ? 'border-red-500' : 'border-gray-300'} rounded-xl px-3 sm:px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
            />
            {errors.reference2 && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.reference2}</p>
            )}
          </div>

          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'SUBMIT'}
          </button>
        </div>
      </div>
    </>
  );
}

export default References; 