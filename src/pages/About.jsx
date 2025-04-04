import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, TrendingUp, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    
    <div className=" bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 flex flex-col items-center px-6 pb-30 md:px-16">
    <Navbar />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-blue-600">Us</span>
      </motion.h1>
      
      <motion.p
        className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We are on a mission to revolutionize the way you experience loans. Say goodbye to traditional complexities and hello to a seamless, digital-first lending experience.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center border-b-4 border-blue-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <feature.icon className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}

const features = [
  {
    icon: CheckCircle,
    title: "Instant Approvals",
    description: "Get your loan approved in minutes with our AI-powered system."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize your needs and provide hassle-free support 24/7."
  },
  {
    icon: TrendingUp,
    title: "Flexible Repayments",
    description: "Choose a repayment plan that suits your financial goals."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    description: "Your data is safe with us, ensuring top-tier security protocols."
  }
];

export default About;
