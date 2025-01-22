import React from "react";
import { Section } from "../../layout";
import { Button, GradientText } from "../../common";

const Newsletter = () => {
  return (
    <Section className="bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <GradientText className="text-4xl font-bold block mb-6">
          Subscribe to My Newsletter
        </GradientText>
        <p className="text-xl text-gray-600 mb-8">
          Get updates about AI, machine learning, and quantitative research
          delivered straight to your inbox.
        </p>
        <form className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </form>
      </div>
    </Section>
  );
};

export default Newsletter;
