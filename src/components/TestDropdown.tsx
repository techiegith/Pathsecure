"use client";

import React, { useState } from "react";

const TestDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-white"
        >
          About Us
          <svg
            className="ml-1"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {isOpen && (
          <div
            className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50"
            style={{ width: "214px" }}
          >
            <div 
              className="px-4 py-2 text-black font-bold hover:bg-gray-100 cursor-pointer"
            >
              Our Team
            </div>
            <div 
              className="px-4 py-2 text-black font-bold hover:bg-gray-100 cursor-pointer"
            >
              Our Approach
            </div>
            <div 
              className="px-4 py-2 text-black font-bold hover:bg-gray-100 cursor-pointer"
            >
              Careers
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestDropdown; 