import React from "react";
import { ExternalLink } from "lucide-react";

const Card = ({
  icon: Icon,
  title,
  description,
  link,
  linkText,
  variant = "default",
  className = "",
  children,
}) => {
  const variants = {
    default: "bg-white hover:border-blue-200",
    gradient:
      "bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-purple-200",
    coral: "bg-[#FFF0ED] hover:border-[#FFB4A2]",
    yellow: "bg-[#FFF8E7] hover:border-[#FFD670]",
  };

  return (
    <div
      className={`
        rounded-xl p-8
        border-2 border-transparent
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:transform hover:-translate-y-1
        ${variants[variant]}
        ${className}
      `}
    >
      {Icon && (
        <div
          className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 
          rounded-lg flex items-center justify-center mb-6
          transition-colors duration-300 group-hover:from-blue-200 group-hover:to-purple-200"
        >
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
      {link && (
        <a
          href={link}
          className="text-blue-600 hover:text-blue-700 inline-flex items-center group"
        >
          {linkText || "Learn more"}
          <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
};

export default Card;
