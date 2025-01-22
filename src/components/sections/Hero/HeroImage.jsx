import React from "react";

const HeroImage = () => {
  return (
    <div className="md:w-1/2">
      <div className="relative group">
        {/* Profile image */}
        <div className="relative">
          <img
            src="/images/profile.png"
            alt="Dr. Muntazir Abidi"
            className="rounded-full w-[350px] h-[350px] object-cover
              transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
