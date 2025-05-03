import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Why?
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-base sm:text-md lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We’re a small but ambitious engineering and research lab, building
          technology that actually matters. At 1024 Bytes, we don’t just ship
          features, we design systems with real value.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          As technology becomes more woven into everyday life, we believe the
          real breakthroughs won’t come from hype cycles, but from quietly
          solving the hard, overlooked problems that shape how the world works.
          Our mission is simple: use software, AI, and blockchain to build
          meaningful solutions.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Currently we are bullish about real world assets(RWAs) on-chain and
          AI-powered tools that can drive businesses and communities. One byte
          at a time, we’re shaping the future we want to live in.
        </p>
      </div>
    </div>
  );
};

export default About;
