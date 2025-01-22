import React from "react";
import { Button, GradientText } from "../../common";
import { Section } from "../../layout";
import { ExternalLink } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <HeroImage />
        <div className="md:w-1/2 text-left">
          <GradientText className="text-5xl font-bold block mb-6">
            Hey Friends!
          </GradientText>
          <p className="text-xl mb-4 text-gray-700">
            I'm Muntazir. A Cosmologist, aspiring Quantitative Researcher, and
            AI enthusiast.
          </p>
          <p className="text-gray-600 mb-6">
            With a passion for bridging academic research and real-world
            applications, I explore AI, machine learning, and quantitative
            finance. Let’s uncover insights together.
          </p>
          <Button variant="primary" withIcon>
            Subscribe for Insights
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
