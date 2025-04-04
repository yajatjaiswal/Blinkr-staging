import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Sparkles } from 'lucide-react';
import lock from "../../assets/lock.svg";

const reviews = [
  {
    text: "I needed a quick loan to manage some emergency medical expenses, and this platform provided me with the required amount within hours. The process was smooth and hassle-free. Highly recommended!",
    author: "Rajesh Sharma",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    text: "I was skeptical at first, but the business loan process was transparent and efficient. The interest rates are competitive, and the repayment options are flexible. Definitely a great NBFC!",
    author: "Priya Mehta",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    text: "Getting a payday loan has never been this easy! No unnecessary paperwork, just a straightforward process. I received my loan within a few hours, and it helped me manage my short-term expenses efficiently.",
    author: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    text: "Their customer service is excellent! I had some doubts about the eligibility criteria, but the support team guided me well. The loan disbursal process was quick, and I am highly satisfied.",
    author: "Sneha Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    text: "I run a small business and needed funds to expand. The business loan I got from here had minimal documentation, and the disbursal was prompt. Great service!",
    author: "Vikram Joshi",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    text: "As a freelancer, I often face cash flow issues. Their payday loan services helped me manage my finances better. The process was fast, and the repayment options are flexible.",
    author: "Anjali Nair",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
  },
];


export default function DataPrivacy() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div className="relative bg-gray-100 py-8 md:py-12 text-center overflow-hidden ml-4 mr-4 rounded-[30px] mt-4">
      {/* Circular gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-t-full bg-purple-500"
            style={{
              width: `${120 - i * 10}%`,
              height: `${120 - i * 10}%`,
              bottom: `-${50 - i * 5}%`,
              left: `${50 - (120 - i * 10) / 2}%`,
              opacity: 0.02 + i * 0.01,
              zIndex: 0
            }}
          />
        ))}
      </div>
      <div className="relative z-10 px-4 md:px-6">
        <h2 className="text-xl md:text-4xl font-bold flex items-center justify-center gap-2">
          Customer Testimonials
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6">
          <button
            className="p-1 md:p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft className="text-purple-600 text-sm md:text-base" />
          </button>
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl flex overflow-hidden">
            {reviews.slice(index, index + 3).map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-1/3 p-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <FaQuoteLeft className="text-purple-600 text-xl md:text-3xl" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 md:mt-4 line-clamp-4 md:line-clamp-none">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-2 mt-2 md:mt-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                    <span className="text-sm md:text-base text-gray-900 font-medium">
                      {review.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="p-1 md:p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight className="text-purple-600 text-sm md:text-base" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 mb-8">
        <img src={lock} alt="lock" className="w-30 h-30" />
        <h2 className="text-xl md:text-4xl font-bold text-center mb-4">We Don't share your data</h2>
        {/* <p className="text-sm md:text-base text-gray-700 text-center max-w-2xl mb-8">
          Your privacy and security are our top priorities. We use industry-standard encryption and security measures to protect your personal and financial information.
        </p> */}
      </div>

    </div>
  );
}
