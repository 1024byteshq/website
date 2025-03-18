import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">
        About 1024 Bytes
      </h1>
      <div className="max-w-none">
        <p className="text-base sm:text-lg mb-6 text-primary">
          At 1024 Bytes, we are at the intersection of cutting-edge technology
          and meaningful impact. Our forward-thinking approach aligns with the
          United Nations Sustainable Development Goals (SDGs), driving
          innovation that matters.
        </p>

        <p className="text-base sm:text-lg mb-6 text-primary">
          We believe in a digital-first future where technology serves humanity.
          Our commitment to sustainability and innovation shapes every project
          we undertake, ensuring we're not just building for today, but creating
          solutions that will benefit generations to come.
        </p>
      </div>
    </div>
  );
};

export default About;
