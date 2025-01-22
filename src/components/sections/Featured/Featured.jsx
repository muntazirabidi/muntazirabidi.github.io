import React from "react";

// Custom Icon Components remain the same
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
    baseColor: "bg-[#ffede6]",
    hoverColor: "hover:bg-[#ffe0d3]",
    iconColor: "text-[#ff6b2c]",
    accentColor: "text-[#ff6b2c]",
    icon: <CubicIcon />,
    citations: "108 citations",
  },
  {
    title: "Bayesian Neural Networks in Cosmology",
    description:
      "Developed cosmoSWAG, introducing stochastic weight averaging for robust simulation-based inference in cosmological surveys. Published in Machine Learning: Science and Technology.",
    link: "#",
    baseColor: "bg-[#e6f4ff]",
    hoverColor: "hover:bg-[#d3ebff]",
    iconColor: "text-[#0091ff]",
    accentColor: "text-[#0091ff]",
    icon: <NetworkIcon />,
    citations: "33 citations",
  },
  {
    title: "Density Field Reconstruction",
    description:
      "Advanced methodology for reconstructing large-scale modes using correlations between smaller-scale modes of galaxy positions. Published in Physical Review D.",
    link: "#",
    baseColor: "bg-[#fff1e6]",
    hoverColor: "hover:bg-[#ffe4d3]",
    iconColor: "text-[#ff8f2c]",
    accentColor: "text-[#ff8f2c]",
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
  iconColor,
  accentColor,
  icon,
  citations,
}) => (
  <div
    className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${baseColor} ${hoverColor} hover:shadow-lg`}
  >
    <div
      className={`${iconColor} transition-transform duration-500 group-hover:scale-110`}
    >
      {icon}
    </div>
    <h3 className="text-2xl font-serif mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="flex justify-between items-center">
      <a
        href={link}
        className={`inline-flex items-center gap-2 ${accentColor} font-medium transition-all duration-300 group-hover:gap-3`}
      >
        View publication →
      </a>
      <span className="text-sm text-gray-500">{citations}</span>
    </div>
  </div>
);

const Featured = () => {
  return (
    <section className="py-24 bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Featured Projects
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
