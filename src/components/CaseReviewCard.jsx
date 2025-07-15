import React from "react";
import { FaShieldAlt, FaCheck } from "react-icons/fa";
import { GiScales } from "react-icons/gi";

const CaseReviewCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-fit relative overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#4b2e6d]/30 via-[#3d3e7f]/30 to-[#29406d]/30 filter blur-3xl opacity-70 z-0" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex flex-col justify-between p-4 lg:p-8 text-left w-full lg:w-1/2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Free
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mt-1">
              Case
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight">
              Review
            </h2>
          </div>

          <ul className="space-y-4 mt-6 mb-4">
            <li className="flex items-center text-gray-700 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <FaShieldAlt className="h-4 w-4 text-blue-600" />
              </span>
              100% Confidential
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <FaCheck className="h-4 w-4 text-green-600" />
              </span>
              No Win, No Fee
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <GiScales className="h-4 w-4 text-orange-600" />
              </span>
              Free Case Evaluation
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <p className="text-right text-md text-gray-700 leading-snug mb-4">
            We are here
            <br />
            to help!
          </p>

          {/* Circular Banner */}
          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#4b2e6d] via-[#3d3e7f] to-[#29406d] flex items-center justify-center relative">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  fill="none"
                  stroke="none"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
                <text
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  <textPath href="#circlePath" startOffset="30%">
                    ONLY 6 SLOTS LEFT
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row-reverse flex-wrap gap-3 mt-8 justify-center lg:justify-end">
            <button className="bg-[#C9A576] text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-[#b58e5c] transition">
              &gt;
            </button>
            <button className="bg-[#C9A576] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#b58e5c] transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseReviewCard;
