import React from "react";
import { Section } from "../../layout";
import { GradientText } from "../../common";
import FeaturedCard from "./FeaturedCard";

const FEATURED_WORK = [
  {
    title: "Quantitative Research",
    description:
      "My work on statistical methodologies for complex systems analysis, achieving 7% precision in cosmological parameter estimation.",
    link: "#",
    variant: "gradient",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Development of innovative AI solutions with BERT embeddings and LLMs, improving model accuracy by 85%.",
    link: "#",
    variant: "coral",
  },
  {
    title: "Technical Writing",
    description:
      "Articles and guides about AI, machine learning, and data analysis for both technical and non-technical audiences.",
    link: "#",
    variant: "yellow",
  },
];

const Featured = () => {
  return (
    <Section>
      <GradientText className="text-4xl font-bold text-center block mb-16">
        Featured Work
      </GradientText>
      <div className="grid md:grid-cols-3 gap-8">
        {FEATURED_WORK.map((work, index) => (
          <FeaturedCard key={index} {...work} />
        ))}
      </div>
    </Section>
  );
};

export default Featured;
