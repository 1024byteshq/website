import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
        Why We Exist
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <p className="text-black/80">
          1024 Bytes exists to help shape a more intentional and integrated
          internet; one where ideas are tested rigorously, systems are built to
          endure, and intelligence is embedded at the core of software.
        </p>

        <p className="text-black/80">
          We work with signal, not noise. Our focus is on building systems that
          are simple, powerful and useful whether they're internal tools,
          agentic infrastructures, or foundational codebases for real-world
          impact.
        </p>

        <p className="text-black/80">
          We collaborate with founders, researchers, and engineers who want to
          move beyond the demo and design software that’s resilient,
          context-aware, and future-facing.
        </p>

        <p className="text-black/80">
          Our mission is simple: build what matters, sharpen what exists, and
          help technical ideas grow into long-term value; one system, one
          insight, one byte at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
