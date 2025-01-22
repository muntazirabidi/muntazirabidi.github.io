import React from "react";
import { Laptop, Brain, BookOpen } from "lucide-react";

const SERVICES = [
  {
    icon: Laptop,
    title: "Educational Platform",
    description:
      "Join elite academic programs through strategic guidance, research experience, and personalized mentoring for aspiring researchers and scientists.",
    link: "https://www.camedventure.com/",
    linkText: "Explore Programs",
    baseColor: "bg-[#f5efe6]",
    hoverColor: "hover:bg-[#ebe5dc]",
    iconColor: "text-[#7d4f50]",
    buttonBaseColor: "bg-[#7d4f50]",
    buttonHoverColor: "hover:bg-[#6a4344]",
  },
  {
    icon: Brain,
    title: "AI Consultation",
    description:
      "Leverage cutting-edge AI solutions for research and business. Specialized in machine learning applications in physics, finance, and data analysis.",
    link: "https://www.ecocam-ai.com/",
    linkText: "Learn More",
    baseColor: "bg-[#edf2f4]",
    hoverColor: "hover:bg-[#e2e8ea]",
    iconColor: "text-[#2b6777]",
    buttonBaseColor: "bg-[#2b6777]",
    buttonHoverColor: "hover:bg-[#1d4b56]",
  },
  {
    icon: BookOpen,
    title: "Research Resources",
    description:
      "Access comprehensive guides, code implementations, and tutorials on machine learning, cosmology, and quantitative research methods.",
    link: "#",
    linkText: "Get Resources",
    baseColor: "bg-[#f3eef8]",
    hoverColor: "hover:bg-[#e9e4ee]",
    iconColor: "text-[#553772]",
    buttonBaseColor: "bg-[#553772]",
    buttonHoverColor: "hover:bg-[#452c5d]",
  },
];

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link,
  linkText,
  baseColor,
  hoverColor,
  iconColor,
  buttonBaseColor,
  buttonHoverColor,
}) => (
  <div
    className={`group relative rounded-3xl p-8 transition-all duration-500 ${baseColor} ${hoverColor} hover:shadow-lg border border-transparent hover:border-gray-100`}
  >
    <div
      className={`${iconColor} mb-6 transition-transform duration-500 group-hover:scale-110`}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center">
        <Icon className="w-8 h-8" />
      </div>
    </div>

    <h3 className="text-2xl font-serif mb-4 text-gray-900">{title}</h3>

    <p className="text-gray-600 mb-8 min-h-[80px]">{description}</p>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-3 ${buttonBaseColor} ${buttonHoverColor} text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md`}
    >
      {linkText}
    </a>
  </div>
);

const Services = () => {
  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            How Can I Help You?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bridging academic excellence with practical applications through
            education, AI solutions, and open resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
