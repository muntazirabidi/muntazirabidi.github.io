import React from "react";

const NavLink = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`
        text-gray-600 hover:text-blue-600 
        transition-colors duration-300
        relative group
        ${className}
      `}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
    </a>
  );
};

export default NavLink;
