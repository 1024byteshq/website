import React from "react";

const ProductTools: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Products & Tools
      </h1>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-[#a0ff6a]">
          Fraqtion
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We are partnering with Fraqtion to build an open, decentralized layer
          for an on-chain future where the gap between real-world assets and
          on-chain liquidity collapses into a single, pluggable ecosystem.
        </p>
        <a
          href="https://fraqtion.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 underline text-sm sm:text-base"
        >
          Learn more about Fraqtion →
        </a>

        <div></div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-[#a0ff6a]">
          Evolvables
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Evolvables is an AI-powered collaborative art protocol for
          coordinating human creativity into proof-of-art for powering on-chain
          utilities.
        </p>
        <a
          href="https://evolvables.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 underline text-sm sm:text-base"
        >
          Learn more about Evolvables →
        </a>

        <div></div>
      </div>
    </div>
  );
};

export default ProductTools;
