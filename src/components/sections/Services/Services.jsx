import React from "react";
import { Section } from "../../layout";
import { GradientText } from "../../common";
import { FileText, Globe, Download } from "lucide-react";

const SERVICES = [
  {
    icon: FileText,
    title: "CamEdVenture",
    description: "Build your profile to get into elite universities.",
    link: "https://www.camedventure.com/",
    linkText: "Visit Our Website",
  },
  {
    icon: Globe,
    title: "AI Consulting",
    description:
      "Helping companies implement AI solutions and improve data analysis.",
    link: "https://www.ecocam-ai.com/",
    linkText: "Learn More",
  },
  {
    icon: Download,
    title: "Free Resources",
    description:
      "Access tutorials, code samples, and guides for machine learning and data analysis.",
    link: "#",
    linkText: "Get Resources",
  },
];

const Services = () => {
  return (
    <Section className="relative bg-gray-50 py-20">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        How Can I Help You?
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-12">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-md rounded-lg p-6 border border-transparent transition-transform hover:scale-105 hover:shadow-lg hover:border-purple-500 overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-600 rounded-full mb-6 relative z-10">
              <service.icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 relative z-10">
              {service.description}
            </p>

            {/* Link Button */}
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition hover:bg-blue-600 relative z-10"
            >
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
