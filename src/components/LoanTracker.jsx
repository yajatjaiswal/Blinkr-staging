import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  BadgeCheck,
  UserCheck,
  PenTool,
  DollarSign,
} from "lucide-react";

const LoanTracker = () => {
  const steps = [
    { id: 1, name: "Eligibility Check", icon: <CheckCircle size={20} /> },
    { id: 2, name: "Loan Approved", icon: <BadgeCheck size={20} /> },
    { id: 3, name: "KYC", icon: <UserCheck size={20} /> },
    { id: 4, name: "E - Sign", icon: <PenTool size={20} /> },
    { id: 5, name: "Disbursal", icon: <DollarSign size={20} /> },
  ];

  const [currentStep, setCurrentStep] = useState(2);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Mobile Layout (Horizontal) */}
      <div className="md:hidden flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step indicator with icon */}
            <div className="relative flex items-center">
              {/* Outer ring with smooth blinking animation */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700
                  ${
                    step.id < currentStep
                      ? "bg-purple-900"
                      : step.id === currentStep && isBlinking
                      ? "bg-purple-600 scale-110"
                      : "bg-purple-400"
                  }
                `}
              >
                {/* Inner circle with Icon */}
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Horizontal line connecting steps */}
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-4 ${
                    step.id < currentStep ? "bg-purple-900" : "bg-purple-400"
                  }`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Layout (Vertical) */}
      <div className="hidden md:block">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center mb-5 relative">
            {/* Step name */}
            <div className="w-2/3 pr-2">
              <span
                className={`text-sm md:text-base font-semibold ${
                  step.id <= currentStep ? "text-purple-900" : "text-gray-700"
                }`}
              >
                {step.name}
              </span>
            </div>

            {/* Step indicator with icon */}
            <div className="relative flex items-center">
              {/* Outer ring with smooth blinking animation */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700
                  ${
                    step.id < currentStep
                      ? "bg-purple-900"
                      : step.id === currentStep && isBlinking
                      ? "bg-purple-600 scale-110"
                      : "bg-purple-400"
                  }
                `}
              >
                {/* Inner circle with Icon */}
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Horizontal line connecting steps (faded on the last step for uniformity) */}
              {index < steps.length && (
                <div
                  className={`h-0.5 w-8 ${
                    step.id < currentStep ? "bg-purple-900" : "bg-purple-400"
                  } 
                  ${index === steps.length - 1 ? "opacity-100" : ""}`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanTracker;
