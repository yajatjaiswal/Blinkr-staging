import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmploymentStatus() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (status === 'self-employed') {
      navigate('/apply/thank-you');
    } else if (status === 'salaried') {
      navigate('/apply/email');
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-4 sm:p-6">
      <div className="bg-white rounded-3xl p-4 sm:p-8 w-full max-w-md shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Are you a Salaried or a Self-Employed?</h2>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Please select your employment status.</p>

        <div className="mb-4 sm:mb-6">
          <select
            value={status}
            onChange={handleStatusChange}
            className="w-full h-10 sm:h-12 border-2 border-gray-300 rounded-xl text-center text-base sm:text-xl font-semibold focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="" disabled>Select your status</option>
            <option value="salaried">Salaried </option>
            <option value="self-employed">Self-Employed</option>
          </select>
        </div>

        <button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={!status || isLoading}
        >
          {isLoading ? 'Processing...' : 'SUBMIT'}
        </button>
      </div>
    </div>
  );
}

export default EmploymentStatus;
