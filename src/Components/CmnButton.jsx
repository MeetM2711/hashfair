// components/CmnButton.jsx
import React from 'react';

const CmnButton = ({  children }) => {
  return (
    <a
     
      className="relative inline-block px-8 py-4 text-lg font-semibold text-black bg-gradient-to-b from-yellow-500 to-yellow-300 rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:text-[#1f1f23] hover:before:top-0 hover:shadow-custom-hover"
    >
      {children}
      {/* Custom hover effect */}
      <span className="absolute inset-0 bg-yellow-400 -top-1 transition-all duration-300 ease-in-out z-[-1]"></span>
    </a>
  );
};

export default CmnButton;
