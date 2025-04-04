import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaCalendarAlt, FaHistory, FaStar, FaGift, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const [currentTip, setCurrentTip] = useState(0);

  const financialTips = [
    {
      tip: "Early repayment of your loan can help improve your credit score and unlock higher loan amounts in the future!"
    },
    {
      tip: "Set a reminder 2 days before your EMI due date to ensure timely payments and maintain a good repayment record."
    },
    {
      tip: "Regular and timely loan repayments can help you become eligible for lower interest rates on your next loan."
    },
    {
      tip: "Maintaining a good credit score through timely EMI payments can help you get instant loan approvals when needed."
    },
    {
      tip: "Maintaining a good credit score through timely EMI payments can help you get instant loan approvals when needed."
    },
    {
      tip: "Plan your EMIs around your salary date to ensure smooth repayments and avoid any late payment charges."
    },
    {
      tip: "Refer your friends to earn rewards and build a strong relationship with us for better loan benefits."
    },
    {
      tip: "Keep your KYC documents updated to ensure quick processing of future loan requests."
    },
    {
      tip: "Download our mobile app to track your loan status and make instant repayments anytime, anywhere."
    },
    {
      tip: "Repay your current loan successfully to become eligible for higher loan amounts and special offers."
    }
  ];

  useEffect(() => {
    // Generate random tip initially
    setCurrentTip(Math.floor(Math.random() * financialTips.length));

    // Change tip every 24 hours
    const interval = setInterval(() => {
      setCurrentTip(Math.floor(Math.random() * financialTips.length));
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Sample data - replace with actual data from your backend
  const dashboardData = {
    amountDisbursed: 50000,
    disbursalDate: '2024-03-15',
    repaymentDate: '2024-04-15',
    loansTaken: 2,
    loyaltyPoints: 250,
    nextEarning: 50
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 pb-4 sm:pb-6 md:pb-8">
        <Navbar/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-6 sm:p-8 mb-6 shadow-lg relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full translate-x-16 translate-y-16" />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                  Welcome back, User! 👋
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">
                  Here's your loan dashboard overview
                </p>
              </div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer shrink-0"
                onClick={() => navigate('/repay')}
              >
                <div className="relative rounded-xl shadow-xl overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700" />
                  
                  {/* Content */}
                  <div className="relative px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                    <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                      <FaWallet className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-lg font-semibold text-white whitespace-nowrap">Repay Now</span>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm text-purple-600 font-medium">Credit Score</p>
                <motion.p 
                  className="text-xl font-bold text-purple-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  750
                </motion.p>
                <div className="w-full bg-purple-200 rounded-full h-1.5 mt-2">
                  <motion.div 
                    className="bg-purple-600 h-1.5 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '75%' }}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.2
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-purple-600">
                  <span>300</span>
                  <span>900</span>
                </div>
              </div>

              {/* Financial Tip */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Financial Tip of the Day</p>
                    <p className="text-sm text-gray-600 mt-1">{financialTips[currentTip].tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Amount Disbursed Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-green-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Amount Disbursed</h3>
              <div className="bg-green-100 p-2 rounded-full">
                <FaWallet className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">₹{dashboardData.amountDisbursed.toLocaleString()}</p>
          </motion.div>

          {/* Disbursal Date Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-blue-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Disbursal Date</h3>
              <div className="bg-blue-100 p-2 rounded-full">
                <FaCalendarAlt className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.disbursalDate}</p>
          </motion.div>

          {/* Repayment Date Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-yellow-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Repayment Date</h3>
              <div className="bg-yellow-100 p-2 rounded-full">
                <FaCalendarAlt className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.repaymentDate}</p>
          </motion.div>

          {/* Number of Loans Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-purple-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Loans Taken</h3>
              <div className="bg-purple-100 p-2 rounded-full">
                <FaHistory className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.loansTaken}</p>
          </motion.div>

          {/* Loyalty Points Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-orange-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Loyalty Points</h3>
              <div className="bg-orange-100 p-2 rounded-full">
                <FaStar className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.loyaltyPoints}</p>
            <p className="text-sm text-gray-500 mt-1">Next earning: {dashboardData.nextEarning} points</p>
          </motion.div>

          {/* Refer & Earn Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col border-b-5 border-pink-500 cursor-pointer"
            onClick={() => navigate('/refer-earn')}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Refer & Earn</h3>
              <div className="bg-pink-100 p-2 rounded-full">
                <FaGift className="w-5 h-5 text-pink-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-800">₹500</p>
              <FaArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mt-1">Per successful referral</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
}

export default Dashboard; 