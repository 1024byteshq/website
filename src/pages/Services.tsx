import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Build better with 1024
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80">
          A dev partner for your craziest ideas. Blockchain, Web, Mobile – all
          handled.
        </p>
      </div>

      {/* Services List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Web Development */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">Web Development</h2>
          <p className="text-white/80">
            Get a developer buddy for your vibe coding mess.
          </p>
        </div>

        {/* Blockchain Development */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Blockchain Development
          </h2>
          <p className="text-white/80">
            Protocols, dApps, smart contracts — we've built across EVM, Solana.
          </p>
        </div>

        {/* Mobile App Development */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            Mobile App Development
          </h2>
          <p className="text-white/80">
            Build clean, performant apps that feel native on iOS and Android.
          </p>
        </div>

        {/* System Integrations & DevOps */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            System Integrations & DevOps
          </h2>
          <p className="text-white/80">
            We wire it all together — infra, pipelines, security, and
            observability.
          </p>
        </div>

        {/* SME Service Management */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2 text-white">
            SME Service Management
          </h2>
          <p className="text-white/80">
            We manage your tech, so you can run your business.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-4">
          Need something different but slightly similar to what we do? We
          probably still do it. Let's talk.
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
