import React from "react";
import { ExternalLink } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  withIcon = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white",
    secondary:
      "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-400",
    outline:
      "bg-transparent border-2 border-blue-400 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <span className="flex items-center justify-center">
        {children}
        {withIcon && <ExternalLink className="ml-2 w-4 h-4" />}
      </span>
    </button>
  );
};

export default Button;
