import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ESign = () => {
  const navigate = useNavigate();
  const [isSigned, setIsSigned] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  const loanDetails = {
    loanAmount: '₹50,000',
    interestRate: '12% p.a.',
    tenure: '12 months',
    processingFee: '₹500',
    emiAmount: '₹4,442',
    disbursalDate: 'Within 24 hours',
    bankAccount: '*******1234',
  };

  const handleProceed = () => {
    if (isSigned) {
      navigate('/congratulations-card');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4 sm:p-6">
      <motion.div 
        className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-2xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">E-Sign Your Loan Agreement</h2>
          <p className="text-gray-600 text-sm">Please review and sign the loan agreement below</p>
        </div>

        {/* Loan Details */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Loan Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Loan Amount</span>
              <span className="font-semibold text-purple-700">{loanDetails.loanAmount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Interest Rate</span>
              <span className="font-semibold text-purple-700">{loanDetails.interestRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Loan Tenure</span>
              <span className="font-semibold text-purple-700">{loanDetails.tenure}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-semibold text-purple-700">{loanDetails.processingFee}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly EMI</span>
              <span className="font-semibold text-purple-700">{loanDetails.emiAmount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Disbursal Time</span>
              <span className="font-semibold text-purple-700">{loanDetails.disbursalDate}</span>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="text-yellow-500 mt-1" size={20} />
            <div>
              <h3 className="text-yellow-800 font-semibold mb-2">Important Notes</h3>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• The loan amount will be disbursed to your bank account ending with {loanDetails.bankAccount}</li>
                <li>• EMI payments will start from next month</li>
                <li>• Prepayment charges may apply if you wish to close the loan early</li>
                <li>• Late payment charges will be applicable for delayed EMI payments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-800">Your Signature</h3>
            {isSigned && (
              <div className="flex items-center text-green-600">
                <CheckCircle size={20} className="mr-1" />
                <span className="text-sm">Signed</span>
              </div>
            )}
          </div>
          
          <div 
            className="h-32 bg-white border-2 border-purple-300 rounded-lg cursor-pointer flex items-center justify-center"
            onClick={() => setShowSignature(true)}
          >
            {showSignature ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-signature text-purple-600"
              >
                Your Name
              </motion.div>
            ) : (
              <p className="text-gray-400">Click to sign</p>
            )}
          </div>
        </div>

        {/* Proceed Button */}
        <motion.button
          className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
            isSigned 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          whileHover={isSigned ? { scale: 1.02 } : {}}
          whileTap={isSigned ? { scale: 0.98 } : {}}
          onClick={handleProceed}
          disabled={!isSigned}
        >
          Proceed to Disbursal
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ESign; 