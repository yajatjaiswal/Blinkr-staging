import React from 'react';
import iconBlack from '../../assets/iconBlack.png';


const Cards2 = () => {
  const features = [
    {
      id: 1,
      title: "Instant Loan",
      description: "Discover your loan eligibility with ease From RBI Approved NBFC.",
      icon: "/icn.png"
    },
    {
      id: 2,
      title: "Secured Loan",
      description: "Unlock incredible loan offers with best interest rates and processing in few minutes.",
      icon: "/icn.png"
    },
    {
      id: 3,
      title: "Insured Loan",
      description: "Faster Processing Apply and get disbursed quickly in a blink. ",
      icon: "/icn.png"
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-[#5799b9] via-[#7095a1] to-[#5799b9] rounded-[30px] p-4 sm:p-6 md:p-12 text-white mt-2 sm:mt-3 mx-2 sm:mx-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Key Defferentiantor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-[#1a1f3d] rounded-2xl p-6 transform transition-transform duration-300 ${feature.id === 1 || feature.id === 2 || feature.id === 3 ? 'hover:scale-104 hover:shadow-xl hover:shadow-purple-500' : ''}`}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <img 
                  src={iconBlack}
                  alt={`${feature.title} icon`} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards2;
