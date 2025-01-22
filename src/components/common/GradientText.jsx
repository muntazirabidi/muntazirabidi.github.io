import React from "react";

const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`
        bg-gradient-to-r from-blue-600 to-purple-600 
        text-transparent bg-clip-text
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;
