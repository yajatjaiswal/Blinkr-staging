import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileUpload, FaRupeeSign, FaChartLine, FaLightbulb } from 'react-icons/fa';

function LoanEligibility() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [maxLoanAmount, setMaxLoanAmount] = useState(50000);
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [showAmountSelector, setShowAmountSelector] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredAmount, setHoveredAmount] = useState(null);

  useEffect(() => {
    if (isFileUploaded) {
      setTimeout(() => setShowAmountSelector(true), 500);
    }
  }, [isFileUploaded]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsUploading(true);
      setShowCongratsModal(true);
      setMaxLoanAmount(60000);
      setSelectedAmount(60000);
      setIsFileUploaded(true);
      event.target.value = '';
    }
  };

  const handleCloseModal = () => {
    setShowCongratsModal(false);
  };

  const handleRequestLoan = () => {
    navigate('/apply/adhar-card');
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setAnimationPhase(1);
    setTimeout(() => setAnimationPhase(2), 1000);
  };

  const generateAmountOptions = () => {
    const options = [];
    const minAmount = 5000;
    const step = 5000;
    
    for (let amount = minAmount; amount <= maxLoanAmount; amount += step) {
      options.push(amount);
    }
    
    return options;
  };

  const getAmountColor = (amount) => {
    const percentage = (amount - 5000) / (maxLoanAmount - 5000);
    const hue = 270 + (percentage * 60);
    return `hsl(${hue}, 70%, 50%)`;
  };

  const getAmountBenefits = (amount) => {
    if (amount >= maxLoanAmount * 0.8) {
      return {
        title: "Premium Benefits",
        features: ["Lower Interest Rate", "Flexible Repayment", "Priority Processing"]
      };
    } else if (amount >= maxLoanAmount * 0.6) {
      return {
        title: "Enhanced Benefits",
        features: ["Standard Interest Rate", "Flexible Repayment"]
      };
    } else {
      return {
        title: "Basic Benefits",
        features: ["Standard Interest Rate"]
      };
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 pt-2 pb-8 md:pb-12">
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[420px] shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Loan Eligibility</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Based on your profile, here are your loan options.</p>

          {/* Eligibility Card */}
          <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-1">Maximum Eligibility</h3>
                <p className="text-xs sm:text-sm text-purple-700">You are eligible for up to</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-900">₹{maxLoanAmount.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {isFileUploaded && (
              <div className={`transition-all duration-500 ${showAmountSelector ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg sm:rounded-xl opacity-50"></div>
                  <div className="relative p-3 sm:p-4">
                    <h4 className="text-xs sm:text-sm font-medium text-purple-900 mb-2 sm:mb-3 flex items-center gap-2">
                      <FaChartLine className="text-purple-600" />
                      Select Your Loan Amount
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {generateAmountOptions().map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountChange(amount)}
                          onMouseEnter={() => setHoveredAmount(amount)}
                          onMouseLeave={() => setHoveredAmount(null)}
                          className={`group relative p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                            selectedAmount === amount
                              ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                              : 'bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-400'
                          }`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <FaRupeeSign className="text-base sm:text-lg" />
                            <span>{(amount/1000).toFixed(0)}k</span>
                          </div>
                          {hoveredAmount === amount && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 sm:w-48 bg-white rounded-lg shadow-xl p-2 sm:p-3 z-10">
                              <div className="text-xs text-gray-600">
                                <div className="font-medium text-purple-900 mb-1">{getAmountBenefits(amount).title}</div>
                                <ul className="space-y-1">
                                  {getAmountBenefits(amount).features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-1">
                                      <FaLightbulb className="text-yellow-500" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs text-purple-600">
                      <span>₹5,000</span>
                      <span>₹{maxLoanAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {animationPhase >= 1 && (
                  <div className={`transition-all duration-500 ${animationPhase === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium text-purple-900">Selected Amount</span>
                        <span className="text-base sm:text-lg font-bold" style={{ color: getAmountColor(selectedAmount) }}>
                          ₹{selectedAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-1 bg-purple-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000"
                          style={{ 
                            width: `${((selectedAmount - 5000) / (maxLoanAmount - 5000)) * 100}%`,
                            backgroundColor: getAmountColor(selectedAmount)
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {isFileUploaded ? (
              <button
                onClick={handleRequestLoan}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors mt-3 sm:mt-4 cursor-pointer"
              >
                REQUEST LOAN
              </button>
            ) : (
              <p className="text-xs sm:text-sm text-purple-700 text-center">Please upload your bank statement to proceed</p>
            )}
          </div>

          {/* Bank Statement Upload Card */}
          {!isFileUploaded && (
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">Upload Bank Statement</h3>
                  <p className="text-xs sm:text-sm text-blue-700">Upload your bank statement to proceed</p>
                </div>
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                  <FaFileUpload className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <button
                onClick={handleUploadClick}
                disabled={isUploading}
                className={`w-full mt-3 sm:mt-4 ${
                  isUploading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer`}
              >
                <FaFileUpload className="w-4 h-4 sm:w-5 sm:h-5" />
                {isUploading ? 'File Selected' : 'Upload Bank Statement'}
              </button>
              {selectedFile && (
                <p className="text-xs sm:text-sm text-blue-700 mt-2 text-center">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Congratulations Modal */}
      {showCongratsModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-full max-w-[400px] shadow-xl">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-2">Congratulations!</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
              Your maximum eligibility has increased to
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-4 sm:mb-6">
              ₹60,000
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoanEligibility; 