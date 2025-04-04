import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';

function AmountSlider() {
  const [amount, setAmount] = useState(5000);
  
  const handleSliderChange = (e) => {
    // Round to nearest 500
    const value = Number(e.target.value);
    const roundedValue = Math.round(value / 500) * 500;
    setAmount(roundedValue);
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 w-full max-w-md">
        <div className="space-y-6 sm:space-y-8">
          {/* Amount Display */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl font-bold text-purple-700">
              <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>{amount}</span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative">
              <input
                type="range"
                min="5000"
                max="100000"
                step="500"
                value={amount}
                onChange={handleSliderChange}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>
            
            {/* Min-Max Labels */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-600">
              <span>₹5000</span>
              <span>₹100000</span>
            </div>
          </div>

          {/* Request Button */}
          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default AmountSlider;