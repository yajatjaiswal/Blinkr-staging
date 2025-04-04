import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddressForm() {
  const navigate = useNavigate();
  const [pan, setPan] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setErrors(prev => ({ ...prev, city: '' }));
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setErrors(prev => ({ ...prev, state: '' }));
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setErrors(prev => ({ ...prev, pincode: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (pincode.length !== 6) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate('/apply/email');
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-4 sm:p-6">
      <div className="bg-white rounded-3xl p-4 sm:p-8 w-full max-w-md shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Enter Details</h2>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Please enter your details below</p>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="text-gray-700 text-xs sm:text-sm font-medium">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={handlePincodeChange}
              placeholder="Enter Pincode"
              className={`w-full h-10 sm:h-12 border-2 ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
            />
            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
          </div>

          <div>
            <label className="text-gray-700 text-xs sm:text-sm font-medium">City</label>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter City"
              className={`w-full h-10 sm:h-12 border-2 ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="text-gray-700 text-xs sm:text-sm font-medium">State</label>
            <input
              type="text"
              value={state}
              onChange={handleStateChange}
              placeholder="Enter State"
              className={`w-full h-10 sm:h-12 border-2 ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 text-base sm:text-lg focus:border-purple-500 focus:outline-none transition-colors`}
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
        </div>

        <button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl transition-colors mt-4 sm:mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isLoading || !city.trim() || !state.trim() || pincode.length !== 6}
        >
          {isLoading ? 'Processing...' : 'SUBMIT'}
        </button>
      </div>
    </div>
  );
}

export default AddressForm;
