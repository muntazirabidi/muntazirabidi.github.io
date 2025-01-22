import React from "react";

// Custom Icon Components
const CubicIcon = () => (
  <div className="w-12 h-12 mb-8">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4"
        y="4"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="13"
        y="4"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="13"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="13"
        y="13"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const NetworkIcon = () => (
  <div className="w-12 h-12 mb-8">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 12h4M14 12h4M12 6v4M12 14v4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const DensityIcon = () => (
  <div className="w-12 h-12 mb-8">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21L12 3L21 21" stroke="currentColor" strokeWidth="2" />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

const FEATURED_WORK = [
  {
    title: "Cubic Halo Bias",
    description:
      "Research on next-to-leading order halo power spectra predictions, achieving significant detections of local and non-local cubic bias parameters. Published in Journal of Cosmology and Astroparticle Physics.",
    link: "#",
    baseColor: "bg-sky-50",
    hoverColor: "hover:bg-sky-100",
    textHoverColor: "group-hover:text-gray-900",
    icon: <CubicIcon />,
    citations: "108 citations",
  },
  {
    title: "Bayesian Neural Networks in Cosmology",
    description:
      "Developed cosmoSWAG, introducing stochastic weight averaging for robust simulation-based inference in cosmological surveys. Published in Machine Learning: Science and Technology.",
    link: "#",
    baseColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
    textHoverColor: "group-hover:text-gray-900",
    icon: <NetworkIcon />,
    citations: "33 citations",
  },
  {
    title: "Density Field Reconstruction",
    description:
      "Advanced methodology for reconstructing large-scale modes using correlations between smaller-scale modes of galaxy positions. Published in Physical Review D.",
    link: "#",
    baseColor: "bg-yellow-50",
    hoverColor: "hover:bg-yellow-100",
    textHoverColor: "group-hover:text-gray-900",
    icon: <DensityIcon />,
    citations: "23 citations",
  },
];

const Card = ({
  title,
  description,
  link,
  baseColor,
  hoverColor,
  textHoverColor,
  icon,
  citations,
}) => (
  <div
    className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 cursor-pointer ${baseColor} ${hoverColor} hover:shadow-lg`}
  >
    <div className="text-gray-900 transition-transform duration-500 group-hover:scale-110">
      {icon}
    </div>
    <h3
      className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${textHoverColor}`}
    >
      {title}
    </h3>
    <p
      className={`text-gray-600 mb-6 transition-colors duration-300 ${textHoverColor}`}
    >
      {description}
    </p>
    <div className="flex justify-between items-center">
      <a
        href={link}
        className={`inline-flex items-center gap-2 text-gray-900 font-medium transition-all duration-300 ${textHoverColor} group-hover:gap-3`}
      >
        View publication →
      </a>
      <span className="text-sm text-gray-500">{citations}</span>
    </div>
  </div>
);

const Featured = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            Featured Projects
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-orange-200 to-yellow-200 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Research contributions in cosmology, machine learning, and
            statistical analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_WORK.map((work, index) => (
            <Card key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
