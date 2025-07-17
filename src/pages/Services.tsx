import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
          From Vibe Code to Intelligence Systems
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-black/80">
          We help ambitious teams turn prototypes and research into real-world
          AI-powered infrastructure.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vibe Code to Stability */}
        <div className="bg-white/10 border-2 border-black rounded-md p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-black">
            Vibe Code to Stability
          </h2>
          <p className="text-black/80">
            From unstable prototypes to production systems; we refactor,
            stabilize, and prep your product to scale.
          </p>
        </div>

        {/* LLM & Agentic Systems */}
        <div className="bg-white/10 border-2 border-black rounded-md p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-black">
            LLM & Agentic Systems
          </h2>
          <p className="text-black/80">
            We build context-aware agents, internal copilots, and AI workflows
            with memory, vector search, and embedded logic.
          </p>
        </div>

        {/* Fraqtion Intelligence: Market & Strategy */}
        <div className="bg-white/10 border-2 border-black rounded-md p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-black">
            Fraqtion Intelligence Setup
          </h2>
          <p className="text-black/80">
            Connect to our curated data bank and AI-powered infra to setup
            visualizations on real-time market shifts, customer trends, and
            product signals. All in one dashboard, built to sharpen your next
            move or investment.
          </p>
        </div>

        {/* Custom Dashboards & Internal Intelligence */}
        <div className="bg-white/10 border-2 border-black rounded-md p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-black">
            Internal Insight Systems
          </h2>
          <p className="text-black/80">
            Using the Fraqtion Intelligence stack, we build internal tools to
            track product signals, customer trends, or LLM feedback all tailored
            to your ops.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <p className="text-lg sm:text-xl lg:text-2xl text-black/80 mb-4">
          Don’t know where your system fits? Let’s figure it out together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#a0ff6a] text-black font-bold py-2 px-6 rounded-full hover:bg-[#a0ff6a]/80 transition-colors"
        >
          Talk to Us
        </Link>
      </div>
    </div>
  );
};

export default Services;
