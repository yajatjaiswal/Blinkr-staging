import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CongratulationsCard = () => {
  const navigate = useNavigate();
  // Animation states
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 500);
    setTimeout(() => setShowSparkles(true), 900);
    setTimeout(() => setShowAmount(true), 1200);
  }, []);
  
  // Confetti configuration
  const confettiColors = ['#8B5CF6', '#4D38DD', '#9A54F7', '#3B82F6', '#60A5FA'];
  const confettiCount = 100;
  const confettiElements = Array.from({ length: confettiCount }).map((_, i) => {
    return {
      id: i,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      size: Math.random() * 10 + 5
    };
  });

  // Sparkle configuration
  const sparkleCount = 12;
  const sparkleElements = Array.from({ length: sparkleCount }).map((_, i) => {
    const angle = (i * (360 / sparkleCount)) * (Math.PI / 180);
    const distance = 80 + Math.random() * 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    return {
      id: i,
      x,
      y,
      size: 10 + Math.random() * 8,
      delay: i * 0.05,
      duration: 0.6 + Math.random() * 0.8
    };
  });

  return (
    <div className="flex items-center justify-center w-full h-full p-4 sm:p-6">
      <motion.div 
        className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-md overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        {/* Success icon */}
        <motion.div 
          className="flex justify-center mb-3 sm:mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        >
          <div className="bg-purple-600 rounded-full p-2 sm:p-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>
        
        {/* Congratulations text with sparkles */}
        <motion.div 
          className="text-center mb-3 sm:mb-4 relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Sparkles around "Congratulations" */}
          {showSparkles && sparkleElements.map(sparkle => (
            <motion.div
              key={sparkle.id}
              className="absolute"
              style={{ 
                left: "50%", 
                top: "50%", 
                x: sparkle.x, 
                y: sparkle.y,
                pointerEvents: "none"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: sparkle.duration,
                delay: sparkle.delay,
                repeat: Infinity,
                repeatDelay: 2 + Math.random(),
              }}
            >
              <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#FFD700" />
              </svg>
            </motion.div>
          ))}
          
          <motion.h2 
            className="text-base sm:text-lg font-bold text-gray-800 mb-1"
            animate={{ 
              scale: showSparkles ? [1, 1.05, 1] : 1,
              textShadow: showSparkles ? ["0 0 0px rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"] : "none",
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            Congratulations!
          </motion.h2>
          <p className="text-gray-600 text-xs sm:text-sm">Your claim has been processed successfully</p>
        </motion.div>
        
        {/* Amount container */}
        <motion.div 
          className="bg-purple-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showAmount ? 1 : 0, y: showAmount ? 0 : 20 }}
          transition={{ type: "spring" }}
        >
          <p className="text-gray-600 text-center text-xs sm:text-sm mb-1.5">Amount Disbursed</p>
          <motion.div 
            className="text-center text-lg sm:text-xl font-bold text-purple-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: showAmount ? [1, 1.1, 1] : 0.8 }}
            transition={{ duration: 0.5, times: [0, 0.5, 1] }}
          >
            ₹50,000
          </motion.div>
          <p className="text-center text-gray-600 text-xs sm:text-sm mt-1.5">to account ending with *******1234</p>
        </motion.div>
        
        {/* Action button */}
        <motion.button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/dashboard')}
        >
          Go to Dashboard
        </motion.button>
        
        {/* Acko branding */}
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-gray-500 text-xs sm:text-sm">Powered by</p>
          <motion.p 
            className="text-xs sm:text-sm font-bold text-purple-600"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
          >
            BLINKR
          </motion.p>
        </div>
        
        {/* Confetti overlay */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {confettiElements.map(confetti => (
              <motion.div
                key={confetti.id}
                className="absolute rounded-sm"
                style={{ 
                  backgroundColor: confetti.color,
                  width: confetti.size,
                  height: confetti.size,
                  left: `${confetti.x}%`,
                  top: "-5%"
                }}
                initial={{ y: "-10%", opacity: 1, rotate: 0 }}
                animate={{ 
                  y: "110%", 
                  opacity: [1, 1, 0.5, 0],
                  rotate: Math.random() > 0.5 ? 360 : -360,
                }}
                transition={{ 
                  duration: Math.random() * 2 + 2,
                  delay: confetti.delay, 
                  ease: [0.1, 0.4, 0.8, 1] 
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CongratulationsCard;