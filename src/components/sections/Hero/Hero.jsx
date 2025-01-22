import React from "react";
import { ArrowRight } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fff8f3] pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <HeroImage />

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
              Bridging <span className="text-[#ff6b2c]">Research</span> with{" "}
              <span className="text-[#2c3e50]">Innovation</span>
            </h1>

            <p className="text-xl text-gray-700">
              I'm Muntazir — a Cosmologist, AI Enthusiast, and aspiring
              Quantitative Researcher exploring the intersection of physics,
              machine learning, and finance.
            </p>

            <p className="text-gray-600">
              From publishing impactful papers in cosmology to developing AI
              solutions and building educational platforms, I embrace the
              journey of continuous learning and cross-disciplinary exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-[#ff6b2c] text-white rounded-lg hover:bg-[#e55a1f] transition-colors shadow-sm">
                View Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2c3e50] text-[#2c3e50] rounded-lg hover:bg-[#2c3e50] hover:text-white transition-colors">
                Watch ML Tutorials
              </button>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Cosmology",
                "Machine Learning",
                "Finance",
                "AI",
                "Education",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#fff0e6] text-[#ff6b2c] rounded-full text-sm transition-colors hover:bg-[#ffe4d3]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                <h3 className="text-3xl font-bold text-[#ff6b2c]">750+</h3>
                <p className="text-gray-600 text-sm">Research Citations</p>
              </div>
              <div className="p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                <h3 className="text-3xl font-bold text-[#2c3e50]">5</h3>
                <p className="text-gray-600 text-sm">Major Publications</p>
              </div>
              <div className="p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                <h3 className="text-3xl font-bold text-[#ff6b2c]">1000+</h3>
                <p className="text-gray-600 text-sm">Professionals Trained</p>
              </div>
              <div className="p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                <h3 className="text-3xl font-bold text-[#2c3e50]">2</h3>
                <p className="text-gray-600 text-sm">Ventures Founded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
