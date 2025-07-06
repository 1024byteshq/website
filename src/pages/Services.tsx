import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          From Vibe Code to Working Product
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80">
          We help founders ship AI-powered tools, blockchain apps, and
          experimental ideas — fast.
        </p>
      </div>

      {/* Services List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI & LLM Engineering */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            AI & LLM Engineering
          </h2>
          <p className="text-white/80">
            Fine-tune prompts, build memory systems, and turn LLM experiments
            into real workflows with vector search, embeddings, and context.
          </p>
        </div>

        {/* Vibe Code Rescue */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Vibe Code to MVP
          </h2>
          <p className="text-white/80">
            Built something that barely works? We’ll clean it up, fix the edge
            cases, and deploy it properly without judging your git commit
            history.
          </p>
        </div>

        {/* Blockchain Development
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Blockchain Development
          </h2>
          <p className="text-white/80">
            Smart contracts, NFTs, DAOs, or data anchoring — across Solana, EVM,
            and Layer 2s. Production-ready and gas-conscious.
          </p>
        </div> */}

        {/* Fullstack Engineering */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Web & Mobile Engineering
          </h2>
          <p className="text-white/80">
            From React dashboards to full-stack platforms and mobile apps —
            we’ll make it fast, secure, and smooth.
          </p>
        </div>

        {/* Infra & DevOps */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Infra & System Integrations
          </h2>
          <p className="text-white/80">
            API orchestration, CI/CD pipelines, Dockerized deployments, cloud
            provisioning, everything wired and ready.
          </p>
        </div>

        {/* Tech for Founders */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">CTO-on-Demand</h2>
          <p className="text-white/80">
            No technical cofounder? No problem. We guide early product decisions
            and keep your architecture sane from day one.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-4">
          Not sure where your idea fits? We’ll help you figure it out. Let’s
          build together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#a0ff6a] text-black font-bold py-2 px-6 rounded-full hover:bg-[#a0ff6a]/80 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Services;
