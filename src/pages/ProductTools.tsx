import React from "react";

const ProductTools: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Products & Tools
      </h1>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-3 sm:mb-4 text-white">
          Tenloops
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We are building a platform that allows vendors across the world to
          easily launch AI-powered storefronts, thus revolutionizing how
          commerce works across the web.
        </p>
        <a
          href="https://tenloops.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 underline text-sm sm:text-base"
        >
          Learn more about Tenloops →
        </a>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-white">
          Fraqtion
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We are partnering with Fraqtion to build an open, decentralized layer
          for an on-chain future where the gap between real-world assets and
          on-chain liquidity collapses into a single, pluggable ecosystem.
        </p>
        <a
          href="https://app.fraqtion.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 underline text-sm sm:text-base"
        >
          Learn more about Fraqtion →
        </a>
      </div>
    </div>
  );
};

export default ProductTools;
