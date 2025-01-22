import React from "react";
import { Section } from "../../layout";
import { GradientText, Card } from "../../common";
import { FileText, Globe, Download } from "lucide-react";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: FileText,
    title: "Research Papers",
    description:
      "Explore my published work in cosmology, machine learning, and statistical analysis.",
    link: "#",
    linkText: "Read papers",
  },
  {
    icon: Globe,
    title: "AI Consulting",
    description:
      "Learn how I help companies implement AI solutions and improve their data analysis.",
    link: "#",
    linkText: "Learn more",
  },
  {
    icon: Download,
    title: "Free Resources",
    description:
      "Access tutorials, code samples, and guides about machine learning and data analysis.",
    link: "#",
    linkText: "Get resources",
  },
];

const Services = () => {
  return (
    <Section className="bg-white/50">
      <GradientText className="text-4xl font-bold text-center block mb-16">
        How Can I Help You?
      </GradientText>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
