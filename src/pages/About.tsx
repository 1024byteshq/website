import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
        Why We Exist
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-white/90 text-lg leading-relaxed">
        <p>
          1024bytes is an engineering and research studio for founders building
          at the edge - especially those experimenting with AI and other cool
          ideas.
        </p>

        <p>
          We specialize in turning vibe-coded prototypes and scattered ideas
          into secure, usable, and scalable systems. From fixing broken flows to
          helping you launch something real, we meet you where you are and ship
          what matters.
        </p>

        <p>
          We care less about industry hype and more about systems that stand the
          test of time. Whether it’s a backend powered by LLMs or a Saas tool
          solving problems in your own business.
        </p>

        <p>
          One byte at a time, we’re shaping the kind of internet we want to live
          in. Less noise. More clarity. Better code.
        </p>
      </div>
    </div>
  );
};

export default About;
