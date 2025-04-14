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
          features, we design systems with real depth, aiming to create tools
          and platforms that stand the test of time.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          As technology becomes more woven into everyday life, we believe the
          real breakthroughs won’t come from hype cycles, but from quietly
          solving the hard, overlooked problems that shape how the world works,
          from commerce to public services, science to society. Our mission is
          simple: use software, AI, and blockchain to power meaningful change.
          No buzzwords, just focused, systems-driven engineering with impact at
          the core.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We keep things lean, driven by talent and curiosity, not red tape. And
          we move fast building with purpose, and just the right amount of
          rebellion. One byte at a time, we’re shaping the future we actually
          want to live in.
        </p>
      </div>
    </div>
  );
};

export default About;
