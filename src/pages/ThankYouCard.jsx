import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouCard = () => {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full  p-4">
      <div className={`w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-700 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Top gradient border */}
        <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        
        {/* Content container */}
        <div className="p-6 relative">
          {/* Success icon with pulsing animation */}
          <div className={`mx-auto w-20 h-20 flex items-center justify-center mb-6 transition-all duration-1000 ${animateIn ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="absolute animate-ping w-16 h-16 rounded-full bg-pink-100"></div>
            <CheckCircle size={64} className="text-purple-600 relative" />
          </div>
          
          {/* Main heading with fade-in animation */}
          <h1 className={`text-2xl font-bold text-center text-gray-800 mb-4 transition-all duration-700 delay-300 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Thank You For Your Application
          </h1>
          
          {/* Subtext with fade-in animation */}
          <p className={`text-center text-gray-600 mb-6 transition-all duration-700 delay-500 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Our team will contact you soon
          </p>
          
          {/* Decorative elements that slide in from sides */}
          <div className="flex justify-between mt-8">
            <div className={`w-12 h-12 rounded-full bg-blue-100 transition-all duration-700 delay-700 ${animateIn ? 'translate-x-0 opacity-40' : '-translate-x-16 opacity-0'}`}></div>
            <div className={`w-8 h-8 rounded-full bg-pink-100 transition-all duration-700 delay-800 ${animateIn ? 'translate-x-0 opacity-60' : 'translate-x-16 opacity-0'}`}></div>
          </div>
        </div>
        
        {/* Bottom gradient border with delayed appearance */}
        <div className={`h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 delay-700 ${animateIn ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
    </div>
  );
};

export default ThankYouCard;