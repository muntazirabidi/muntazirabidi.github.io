import React from "react";

const HeroImage = () => {
  return (
    <div className="lg:w-1/3 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-indigo-200 rounded-full blur-2xl opacity-30"></div>
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
