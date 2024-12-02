import React from 'react';
import { FiFileText } from 'react-icons/fi'; // Import the details icon

const Button = ({ label, Icon, className = '', iconSize = 16 }) => {
  return (
    <button
      type="button"
     
      className={`px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600 ${className}`}
    >
      {Icon && <Icon className="mr-2 inline" size={iconSize} />} {/* Render icon if provided */}
      {label}
    </button>
  );
};

export default Button;